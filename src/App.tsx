import Router from "@/Router";
import "@/App.css";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    })();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session) {
    console.log("session is null");
  }
  return <Router />;
}

export default App;
