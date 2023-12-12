const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const createCurrency = async(req, res) => {

    try {

        const {name, cnic, currency, amount, totalamount} = req.body

        const data = await prisma.currency.create({
            data: {
                name,
                cnic: parseInt(cnic),
                currency,
                amount: parseInt(amount),
                totalamount: parseInt(totalamount)
            }
        })

        res.status(201).json({
            success: true,
            message: "Entry added successfully",
            data: data
        })

    } catch (error) {
        console.error("Error creating currency:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message // Send the error message to the client for debugging purposes
        }); 
    }

}


const allCurrency = async(req, res) => {

    try {

        const data = await prisma.currency.findMany()

        res.status(201).json({
            success: true,
            message: "Entries retrived successfully",
            data: data
        })

    } catch (error) {
        return error        
    }

}


const deleteCurrencies = async(req, res) => {

    try {

        const id = req.params.id

        console.log("id", id)

        const data = await prisma.currency.delete({
            where:{
                userid: parseInt(id)
            }
        })

        res.status(203).json({
            success: true,
            message: "Entries deleted successfully",
            data: data
        })

    } catch (error) {
        console.error("Error creating currency:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message 
        });       
    }

}


module.exports = {
    createCurrency,
    allCurrency,
    deleteCurrencies
}