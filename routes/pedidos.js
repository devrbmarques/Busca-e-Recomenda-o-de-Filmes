
const express = require('express');
const router = express.Router();

// Retorna PEDIDOS
router.get('/', (req, res, next) => {
    res.status('200').send({
        mensagem: 'Retorna os PEDIDOS'
    });
});

// Insere PEDIDO
router.post('/', (req, res, next) => {
    res.status('201').send({
        mensagem: 'PEDIDO foi CRIADO'
    });
});

// Retorna dados de um PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
        res.status('200').send({
        mensagem: 'DETALHES do PEDIDO',
        id_pedido: id
    });
});

// Delta Pedido
router.delete('/', (req, res, next) => {
    res.status('201').send({
        mensagem: 'PEDIDO DELETADO'
    });
});

module.exports = router;