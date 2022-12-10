import { OAuth2Client } from "google-auth-library";

export const authUser = async function(googleClientId, token) {
    const client = new OAuth2Client(googleClientId);
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: googleClientId,
    });
    const payload = ticket.getPayload();
    return payload;
}