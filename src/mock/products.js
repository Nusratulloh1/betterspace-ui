import dena from '/@/assets/images/products/dena.png'
import sleepy from '/@/assets/images/products/sleepy.png'
import poroshok from '/@/assets/images/products/poroshok.png'
import splat from '/@/assets/images/products/splat.png'
import kazan from '/@/assets/images/products/kazan.png'
import ariel from '/@/assets/images/products/ariel.png'
import polaris from '/@/assets/images/products/polaris.png'
import sello from '/@/assets/images/brands/sello.png'
import asaxiy from '/@/assets/images/brands/asaxiy.png'
import olcha from '/@/assets/images/brands/olcha.png'

const products = [
    {
        "id": 1,
        "name": "Olma sharbat",
        "image": dena,
        "status": 1,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 30,
        "werehouse": [
            {
                "image": olcha,
                "price": "9 шт"
            },
            {
                "image": asaxiy,
                "price": "9 шт"
            },
            {
                "image": sello,
                "price": "9 шт"
            }
        ]
    },
    {
        "id": 2,
        "name": "Sleepy podguznik",
        "image": sleepy,
        "status": 2,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 1,
        "werehouse": [
            {
                "image": asaxiy,
                "price": "9 шт"
            }
        ]
    },
    {
        "id": 3,
        "name": "Oilaviy poroshok",
        "image": poroshok,
        "status": 1,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 5,
        "werehouse": [
            {
                "image": olcha,
                "price": "9 шт"
            },
            {
                "image": sello,
                "price": "9 шт"
            }
        ]
    },
    {
        "id": 4,
        "name": "Splat zubi",
        "image": splat,
        "status": 3,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 4,
        "werehouse": [
            {
                "image": asaxiy,
                "price": "9 шт"
            },
            {
                "image": sello,
                "price": "9 шт"
            }
        ]
    },
    {
        "id": 5,
        "name": "Mechta kastryulya",
        "image": kazan,
        "status": 1,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 1,
        "werehouse": [
            {
                "image": olcha,
                "price": "9 шт"
            },
        ]
    },
    {
        "id": 6,
        "name": "Ariel poroshok",
        "image": ariel,
        "status": 4,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 2,
        "werehouse": [
            {
                "image": olcha,
                "price": "9 шт"
            },
            {
                "image": asaxiy,
                "price": "9 шт"
            },
            {
                "image": sello,
                "price": "9 шт"
            }
        ]
    },
    {
        "id": 7,
        "name": "Polaris koffe mashina",
        "image": polaris,
        "status": 3,
        "selected": false,
        "prices": [
            {
                "image": olcha,
                "price": "100 тыс"
            },
            {
                "image": asaxiy,
                "price": "500 тыс"
            },
            {
                "image": sello,
                "price": "300 тыс"
            }
        ],
        "size": 7,
        "werehouse": [
            {
                "image": asaxiy,
                "price": "9 шт"
            }
        ]
    },
]
export default products