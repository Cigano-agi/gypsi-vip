'use client'

import { create } from 'zustand'
import PocketBase from 'pocketbase'
import type { Profile } from '@/lib/pocketbase/types'

interface AuthState {
  user: Profile | null
  isAuthenticated: boolean
  isLoading: boolean
  initialized: boolean

  initialize: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, username: string, path: 'ladino' | 'mago' | 'mercador') => Promise<void>
  logout: () => void
  refreshUser: () => Promise<void>
}

function getPb(): PocketBase {
  const { getClient } = require('@/lib/pocketbase/client')
  return getClient()
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  initialized: false,

  initialize: async () => {
    try {
      const pb = getPb()
      if (pb.authStore.isValid && pb.authStore.record) {
        try {
          await pb.collection('users').authRefresh()
          const record = pb.authStore.record
          set({
            user: record as unknown as Profile,
            isAuthenticated: true,
            initialized: true,
          })
        } catch {
          pb.authStore.clear()
          set({ user: null, isAuthenticated: false, initialized: true })
        }
      } else {
        set({ initialized: true })
      }
    } catch {
      set({ initialized: true })
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      const pb = getPb()
      const auth = await pb.collection('users').authWithPassword(email, password)

      await pb.collection('users').update(auth.record.id, {
        last_seen_at: new Date().toISOString(),
      })

      set({
        user: auth.record as unknown as Profile,
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  register: async (email: string, password: string, username: string, path: 'ladino' | 'mago' | 'mercador') => {
    set({ isLoading: true })
    try {
      const pb = getPb()

      await pb.collection('users').create({
        email,
        password,
        passwordConfirm: password,
        username,
        name: username,
        path,
        level: 1,
        xp: 0,
        xp_to_next: 100,
        attr_ai: 0,
        attr_automacao: 0,
        attr_vendas: 0,
        attr_database: 0,
        attr_conteudo: 0,
        attr_marketing: 0,
        adventures_count: 0,
        missions_count: 0,
        streak_days: 0,
        is_founder: false,
        is_admin: false,
      })

      const auth = await pb.collection('users').authWithPassword(email, password)

      set({
        user: auth.record as unknown as Profile,
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  logout: () => {
    const { clearAuth } = require('@/lib/pocketbase/client')
    clearAuth()
    set({ user: null, isAuthenticated: false })
  },

  refreshUser: async () => {
    try {
      const pb = getPb()
      if (pb.authStore.isValid && pb.authStore.record) {
        const user = await pb.collection('users').getOne(pb.authStore.record.id)
        set({ user: user as unknown as Profile })
      }
    } catch {
      // silent fail
    }
  },
}))
