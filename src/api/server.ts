const token = 'ed302f598073d3994e3860ab1139842b4c8cce5ef5f3ee17';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://whiskey-app.onrender.com/api/whiskey`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error("Failed to retrieve any Whiskey Data from the server")
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://whiskey-app.onrender.com/api/whiskey`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json();
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://whiskey-app.onrender.com/api/whiskey/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://whiskey-app.onrender.com/api/whiskey/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    }
}
