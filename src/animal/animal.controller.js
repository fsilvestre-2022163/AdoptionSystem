'use strict'

import Animal from './animal.model.js'


export const registerAnimal = async (req, res) => {
    try {
        let dataAni = req.body
        let animal = new Animal(dataAni)
        await animal.save()
        return res.send({ message: 'registered succesfully' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: 'Error registering animal', err })
    }
}

export const updateAnimal = async (req, res) => {
    try {
        let { id } = req.params
        let dataAni = req.body
        
        let updateAnimal = await Animal.findOneAndUpdate(
            { _id: id },
            dataAni,
            { new: true }
        )
        if (!updateAnimal) return res.status(401).send({ message: 'Animal not found and not update' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({message : 'Error'})
    }

}

export const deleteAnimal = async(req, res)=>{
    try {
        let {id}= req.params
        let deleteAnimal = await Animal.findOneAndDelete({_id: id})
        if(!deleteAnimal ) return res.status({messaje: 'Account not found and not deleted'})

        return res.send({messaje: `The pet ${deleteAnimal.name} deleted success`})

    } catch (err) {
        console.log(err)
        return res.status(500).send({message : 'Error deleting pet'})
    }
}