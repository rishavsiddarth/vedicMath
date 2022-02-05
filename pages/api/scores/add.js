const json2csv = require('json2csv')
const fs = require('fs');


const postScores = async(req, res) => {
    const jsonData = req.body;
    //do your logic to save data
    // First insertion
    // const f1 = " "
    // let csv = json2csv.parse(jsonData);
    // // Also you'd need to check if the file is empty or not to add the ',' or not on the next line
    // fs.writeFile('data/data1.csv',  csv, (err) => {
    // if (err) throw err;
    // console.log('The data was appended to file!');
    // });

    // Next insertions
    let csv = json2csv.parse(jsonData, { header: false });
    console.log(csv);
    // Also you'd need to check if the file is empty or not to add the ',' or not on the next line
    fs.appendFile('data/data1.csv', '\n'+csv, (err) => {
        if (err) {
            // throw err;
            res.status(199).json({msg:err, errorCode:1})
        }
        res.status(201).json({msg:"Data submited successfully", errorCode:0})
    });
}

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        postScores(req, res);
        

        

        // res.status(199).json({msg:"Error while submitting", errorCode:1})
    } else {
        res.status(400).send({ message: 'Only POST requests allowed' })
        return
    }
}
export default handler