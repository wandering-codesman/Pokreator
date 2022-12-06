import { table, minifyRecords } from '../utils/index';

export default async (req, res) => {
    const { name } = req.body;
    try {
        const createdRecords = await table.create([{ fields: { name } }]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        };
        res.status(200);
        res.json(createdRecord);
    } catch (err) {
        console.error(err);
    }
};

// const method = req.method;
// let result;
// switch (method) {
//     case 'PUT':
//         try {
//             const updatedRecords = await table.update({
//                 recordId,
//                 name
//             });
//             res.status(200);
//             res.json(getMinifiedRecord(updatedRecords[0]));
//         } catch (err) {
//             console.error(err);
//             res.status(500);
//             res.json({ msg: 'sort out your bugs bro' });
//         }
//         break;
//     case 'GET':
//         try {
//             const { name, type } = req.body;
//             const updatedPokemon = await prisma.pokemon.update({
//                 where: { id: Number(pokemonId) },
//                 data: { name, type }
//             });

//             res.statusCode = 200;
//             res.json(updatedPokemon);
//         } catch (err) {
//             console.error(err);
//             res.statusCode = 500;
//             res.json({ msg: 'sort out your bugs bro' });
//         }
//         break;
//     case 'DELETE':
//         try {
//             const { name, type } = req.body;
//             const deletedPokemon = await prisma.pokemon.delete({
//                 where: { id: Number(pokemonId) },
//                 name,
//                 type
//             });

//             res.statusCode = 200;
//             res.json({
//                 ...result,
//                 message: `Pokemon with ${pokemonId} has been deleted`
//             });
//         } catch (err) {
//             console.error(err);
//             res.statusCode = 500;
//             res.json({ msg: 'sort out your bugs bro' });
//         }
// }
// };
