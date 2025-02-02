export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      registrants: {
        Row: {
          created_at: string | null
          id: number
          kelas_type: string
          kategori_type?: string | null
          name: string
          phone: string
        }
        Insert: {
          created_at?: string | null
          kelas_type: string
          kategori_type?: string | null
          name: string
          phone: string
        }
        Update: {
          created_at?: string | null
          kelas_type: string
          kategori_type?: string | null
          name: string
          phone: string
        }
      },
      classTypes: {
        Row: {
          created_at: string | null
          id: number
          name: string
          label: string
          closed: boolean
        }
        Insert: {
          created_at?: string | null
          name: string
          label?: string
          closed?: boolean
        }
        Update: {
          created_at?: string | null
          name: string
          label?: string
          closed?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}