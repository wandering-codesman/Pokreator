import {
    table,
    minifiedRecords,
    getMinifiedRecord,
    minifyRecords
} from '../utils/';

export default async (req, res) => {
    try {
        const records = await table.select({}).firstPage();
        const minifiedRecords = minifyRecords(records);
        res.status(200);
        res.json(minifiedRecords);
    } catch (err) {
        console.error(err);
    }
};

// export default async (req, res) => {
//     const method = req.method;
//     let result;
//     switch (method) {
//         case 'GET':
//             try {
//                 const records = await table.select({}).firstPage();
//                 const minifiedRecords = minifyRecords(records);
//                 res.status(200);
//                 res.json(minifiedRecords);
//             } catch (err) {
//                 res.status(500);
//                 res.json({ msg: 'sort out your bugs bro' });
//             }
//             break;
//         case 'POST':
//             const { Name, Type } = req.body;
//             try {
//                 const createdRecords = await table.create([
//                     {
//                         fields: { Name, Type }
//                     }
//                 ]);
//                 const createdRecord = {
//                     id: createdRecords[0].id,
//                     fields: createdRecords[0].fields
//                 };
//                 res.status(200);
//                 res.json(createdRecord);
//             } catch (err) {
//                 console.error(err);
//                 res.status(500);
//                 res.send({ msg: 'sort out your bugs bro' });
//             }
//             break;
//     }
// };
