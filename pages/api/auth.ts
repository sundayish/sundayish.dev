import axios from 'axios';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function getAccessToken(): Promise<string> {
    const result = await axios.post(
        'https://accounts.spotify.com/api/token',
        `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );

    return result.data.access_token;
}

export default async (req: any, res: any): Promise<void> => {
    const accessToken = await getAccessToken();
    res.status(200).json({ accessToken });
};