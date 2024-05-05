export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const res = await $fetch(`https://${process.env.MAIL_CHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAIL_CHIMP_AUDIENCE_LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${process.env.MAIL_CHIMP_API_KEY}`
      },
      body: JSON.stringify({
        email_address: body.emailAddress,
        status: 'subscribed',
        tags: [body.tags]
      })
    })
  
    return res
})