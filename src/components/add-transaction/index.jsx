import { Modal, ModalOverlay, RadioGroup, Radio, Button, ModalFooter, ModalContent, FormLabel, FormControl, ModalBody, Input, ModalHeader } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { GlobalContext } from '../../context';

export default function TransactionForm({ onClose, isOpen }) {
    const { formData, setFormData, handleFormSubmit } = useContext(GlobalContext);

    function handleFormChange(event) {
        const { name, value } = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formData);
        onClose(); // Close the modal after form submission
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Add New Transaction
                    </ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder='Enter Transaction Description' name="description" type="text" value={formData.description} onChange={handleFormChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input placeholder='Enter Transaction Amount' name="amount" type="number" value={formData.amount} onChange={handleFormChange} />
                        </FormControl>
                        <RadioGroup mt={'5'} value={formData.type} onChange={(value) => setFormData({ ...formData, type: value })}>
                            <Radio checked={formData.type === 'income'} mr={'3'} value="income" colorScheme="green" name="type">Income</Radio>
                            <Radio checked={formData.type === 'expense'} value="expense" colorScheme="red" name="type">Expenses</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button type='submit'>Add</Button> {/* Added type='submit' attribute */}
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
}
