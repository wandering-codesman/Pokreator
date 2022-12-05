import { table, minifyRecords, getMinifiedRecord } from '../utils/index';

export default async (req, res) => {
    const { id, fields } = req.body;
    try {
        const updatedRecord = await table.update([{ id, fields }]);

        res.status(200);
        res.json(getMinifiedRecord(updatedRecord[0]));
    } catch (err) {
        console.error(err);
    }
};
