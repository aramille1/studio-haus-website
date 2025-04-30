import { NextResponse } from 'next/server';

// Your Slack webhook URL (replace with your actual webhook URL)
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    // Extract form data from request
    const data = await request.json();
    const { name, email, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // If no Slack webhook URL is configured, return an error
    if (!SLACK_WEBHOOK_URL) {
      console.error('Slack webhook URL is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare Slack message
    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Contact Form Submission',
            emoji: true
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${name}`
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${message}`
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Submitted from Studio Haus website at ${new Date().toLocaleString()}`
            }
          ]
        }
      ]
    };

    // Send data to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(slackMessage)
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API responded with ${slackResponse.status}`);
    }

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
