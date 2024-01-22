import { createAddressService, putAddressService, deleteAddressService } from "../repositories/address/address";

export const createAddress = async (req, res) => {
    try {
        let result = await createAddressService(req.joi);
        res.status(201).send(result);
    } catch (err) {
        console.error(err);
        res.status(400).send({ name: err.name, message: err.message });
    }
};

export const putAddressRequest = async (req, res) => {
    try {
        let response = await putAddressService(req.joi);
        if (response[0] == 0) {
            return res.status(409).send({ message: "record was not found" });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(400).send({ message: err });
    }
};

export const deleteAddressRequest = async (req, res) => {
    try {
        let response = await deleteAddressService(req.joi);
        if (response[0] == 0) {
            return res.status(409).send({ message: "record was not found" });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(400).send({ message: err });
    }
};
