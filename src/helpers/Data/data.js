import canon from '../../assets/images/canon.jpg'
import hdd from '../../assets/images/hdd.png'
import keyboard from '../../assets/images/keybord.png'
import mouse from '../../assets/images/mouse.jpg'
import pc1 from '../../assets/images/pc1.png'
import laptop from '../../assets/images/laptop.jpg'
import pc2 from '../../assets/images/pc2.webp'
import ram from '../../assets/images/ram.png'


const products = [
    {
        productId: 'IT01',
        name:'Canon 1100d',
        price:2500.00,
        image:canon
    },{
        productId: 'IT02',
        name:'Computer Set 1',
        price:2500.00,
        image:pc1
    },{
        productId: 'IT03',
        name:'Computer Set 2',
        price:1799.00,
        image:pc2
    },{
        productId: 'IT04',
        name:'Hard Disk (500GB)',
        price:470.00,
        image:hdd
    },{
        productId: 'IT05',
        name:'Keyboard (Black)',
        price:200.00,
        image:keyboard
    },{
        productId: 'IT06',
        name:'Laptop',
        price:2399.00,
        image:laptop
    },{
        productId: 'IT07',
        name:'Mouse (Wireless)',
        price:190.00,
        image:mouse
    },{
        productId: 'IT08',
        name:'Ram (8GB)',
        price:450.00,
        image:ram
    }
]

export {products}