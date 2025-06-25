export class EmailNoticeService {
  private static API_URL =
    'https://api-internal-staging.kienlongbank.co/notification/api/v1/external/email/createEmailNotice';
  private static CLIENT_ID = 'corebank-fcc-client';
  private static API_KEY = '0b4653c2-c9d1-4654-aba0-bc85fa296915';

  static async sendEmailNotice({
    requestId,
    cifNumber,
    email,
    subject,
    emailMessage,
    source = 'CMS',
  }: {
    requestId: string;
    cifNumber: string;
    email: string;
    subject: string;
    emailMessage: string;
    source?: string;
  }) {
    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': this.CLIENT_ID,
        'X-Api-Key': this.API_KEY,
      },
      body: JSON.stringify({
        requestId,
        cifNumber,
        email,
        subject,
        emailMessage,
        source,
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }
    return response.json();
  }
}