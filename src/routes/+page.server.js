import { WEBHOOK } from '$env/static/private'


export const actions = {
  default: async ()=>{

    const res = await fetch(WEBHOOK, {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({
        username: 'Event Bot',
        avatar_url: "https://static.turbosquid.com/Preview/001180/756/VW/icon-party-3D_0.jpg",
        embeds: [
          {
            color: 11730954,
            fields: [
              {
                name: 'Email',
                value: "going"
              }
            ]
          }
        ]
      })
    })
    return { success: true };
  }

}