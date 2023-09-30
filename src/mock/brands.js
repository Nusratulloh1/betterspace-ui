import olcha from "/@/assets/images/brands/olcha.png"
import zoodmall from "/@/assets/images/brands/zoodmall.png"
import sello from "/@/assets/images/brands/sello.png"
import asaxiy from "/@/assets/images/brands/asaxiy.png"
import wildberries from "/@/assets/images/brands/wildberries.png"
import alif from "/@/assets/images/brands/alif.png"
import bulavka from "/@/assets/images/brands/bulavka.png"
import chakana from "/@/assets/images/brands/chakana.png"
import tenge from "/@/assets/images/brands/tenge.png"
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