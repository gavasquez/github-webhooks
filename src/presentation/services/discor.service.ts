import { envs } from "../../config";

export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() { }

    async notify(message: string) {
        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2EydTVuZzZ4bTNmcXI1NTFrM3B4ZGZrZXd4bGpyemhvMHhzNXEzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif' }
                }
            ]
        }

        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!resp.ok) {
            console.log('Error sending message to discord');
            return false;
        }

        return true;

    }


}