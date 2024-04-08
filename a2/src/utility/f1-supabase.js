import { createClient } from '@supabase/supabase-js';

const supaUrl = 'https://dfnpsugvwgrgbugddzdb.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmbnBzdWd2d2dyZ2J1Z2RkemRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NDQzMjgsImV4cCI6MjAyNDIyMDMyOH0.QfpP8lWngSrEXk46LvQbkMJHkwHLnVmkJd22kGMkzf8';

const Supabase = createClient(supaUrl, supaAnonKey);

export default Supabase;