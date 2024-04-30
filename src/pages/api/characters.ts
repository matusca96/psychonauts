import { NextApiRequest, NextApiResponse } from 'next';

import { api } from '../../services/api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    const query = req.query.name;
    const response = await api.get('characters', {
      params: {
        name: query,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API route error:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
