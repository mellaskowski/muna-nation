import React from "react";
import type { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { getAuthToken } from "~/models/spotify.server";

interface ActionData {
    errors: {
      email?: string;
      password?: string;
    };
  }


export const action: ActionFunction = async ({ request }) => {
    const authToken = await getAuthToken();

    if (authToken) {
        debugger;
        return true;
    }

};

export default function Discography() {

    

    // React.useEffect(() => {
    //     const authToken = await getAuthToken();
    // }, []);
    
    return (
        <div>albumns on albumns</div>
    );
}