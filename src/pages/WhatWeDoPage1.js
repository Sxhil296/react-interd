import React from 'react'
import WhatWeDoPage from '../components/WhatWeDoPage'
import serviceImage from '../assets/services1.webp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WhatWeDoPage1 = () => {
  return (
    <div>
        <Navbar />
        <WhatWeDoPage
        title='Start the automated process.' 
        para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas scelerisque neque sit amet consequat. Mauris condimentum, nisi sollicitudin viverra maximus, nisl nulla rhoncus libero, quis consequat risus libero id orci. Proin est magna, ornare convallis justo id, egestas eleifend dolor. Vivamus bibendum lacus ullamcorper, finibus nisi in, convallis leo. In varius ante ultricies neque imperdiet, ac euismod dolor fermentum. Ut ligula mi, tincidunt eget purus vitae, gravida viverra tellus. Integer venenatis, nibh vel fermentum convallis, urna elit tristique orci, a sollicitudin nisl augue a felis. Nulla lacinia a augue vel elementum. Suspendisse bibendum finibus sapien ac consectetur. Sed ac enim porta, tristique risus in, porttitor sapien. Vivamus et velit in lorem efficitur sollicitudin nec non ipsum. Donec ut mi eu mi tempor commodo.


        Etiam euismod, tellus id varius feugiat, dui massa faucibus nisi, ac pellentesque dui quam sed dolor. Duis mi sapien, ullamcorper at neque ac, tempor consectetur urna. Cras dictum nisi eget elit posuere, ultricies sodales risus sagittis. Donec sagittis, nibh eu cursus pretium, orci velit accumsan quam, ut efficitur dui felis quis tellus. Aenean et lacus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus volutpat felis a vestibulum mollis. Ut malesuada tincidunt sapien, vitae pellentesque quam hendrerit ut. Integer in euismod lectus. Etiam at sapien nec tortor fermentum consequat. Etiam efficitur felis et erat luctus, ut mattis risus mattis. Praesent sed est leo. Pellentesque condimentum ultricies arcu nec suscipit. Nunc dictum eros a erat aliquet, sed dignissim libero posuere.'
        image={serviceImage}/>
        <Footer />
    </div>
  )
}

export default WhatWeDoPage1