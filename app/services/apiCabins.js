import { supabase } from "../_lib/supabase"



export async function createCabin(newCabin){

const { data, error } = await supabase
  .from('cabins')
  .insert([newCabin])
  .select()
}