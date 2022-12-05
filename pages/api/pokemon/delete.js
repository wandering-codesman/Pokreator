import { table, minifyRecords, getMinifiedRecord } from '../utils/index';

export default async (req, res) => {
    const { id } = req.body;
    try {
        const deletedRecords = await table.destroy([id]);

        res.status(200);
        res.json(getMinifiedRecord(deletedRecords[0]));
    } catch (err) {
        console.error(err);
    }
};
