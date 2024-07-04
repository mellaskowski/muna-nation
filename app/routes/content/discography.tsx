
import type { ActionFunction } from "@remix-run/node";
import { getAuthToken } from "~/models/spotify.server";



export const action: ActionFunction = async ({ request }) => {


};

export default function Discography() {

    const authToken = getAuthToken();
    
    return (
        <div>albumns on albumns</div>
    );
}