import olcha from "/@/assets/images/brands/olcha.svg"
import zoodmall from "/@/assets/images/brands/zoodmall.svg"
import sello from "/@/assets/images/brands/sello.svg"
import asaxiy from "/@/assets/images/brands/asaxiy.svg"
import wildberries from "/@/assets/images/brands/wildberries.svg"
import alif from "/@/assets/images/brands/alif.svg"
import bulavka from "/@/assets/images/brands/bulavka.svg"
import chakana from "/@/assets/images/brands/chakana.svg"
import tenge from "/@/assets/images/brands/tenge.svg"
import { ref } from "vue"
const marketplaces = ref([
    {
        id: 1,
        image: olcha,
        title: "Olcha.uz",
        selected: true,
    },
    {
        id: 2,
        image: zoodmall,
        title: "Zoodmall",
        selected: true,
    },
    {
        id: 3,
        image: sello,
        title: "Sello.uz",
        selected: true,
    },
    {
        id: 4,
        image: wildberries,
        title: "Wildberries",
        selected: true,
    },
    {
        id: 5,
        image: asaxiy,
        title: "Asaxiy",
        selected: true,
    },
    {
        id: 6,
        image: alif,
        title: "alif",
        selected: true,
    },
    {
        id: 7,
        image: bulavka,
        title: "Bulavka",
        selected: true,
    },
    {
        id: 8,
        image: chakana,
        title: "Chakana",
        selected: true,
    },
    {
        id: 9,
        image: tenge,
        title: "Tenge Market",
        selected: true,
        notOpened: true,
    }
])
export default marketplaces