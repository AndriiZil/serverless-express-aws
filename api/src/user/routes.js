const { Router } = require('express');

const router = Router({
    mergeParams: true,
});

router.get('/', (req, res) => {

    console.log(req);
    return res.status(200).json({})
});

module.exports = {
    router
}
