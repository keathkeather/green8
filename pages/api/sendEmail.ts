import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Your code here
    if(req.method === 'POST'){
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const message = req.body.message;
        console.log(firstName,email,lastName,message)
        res.status(200).json({firstName,email,lastName,message})            

        
    }else{
        res.status(405).json({message: 'Method not allowed'})
        
    }
}
