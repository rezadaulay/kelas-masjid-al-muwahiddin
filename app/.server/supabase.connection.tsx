import { createClient } from '@supabase/supabase-js'
import { environment } from './environment'
import { Database } from '../types/database.types'

const supabaseClient = () => {
    const env = environment();
    // console.log(env.SUPABASE_URL, env.SUPABASE_KEY)
    const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_KEY);
    return supabase
};

export { supabaseClient };