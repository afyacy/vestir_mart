import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import FindStoreIcon from '../../public/images/icons/location.svg'
import SupportIcon from '../../public/images/icons/mail.svg'
import DownArrowIconWhite from '../../public/images/icons/chevron-down-white.svg'
import SearchIcon from '../../public/images/icons/search.svg'
import UserIcon from '../../public/images/icons/user.svg'
import RepeatIcon from '../../public/images/icons/repeat.svg'
import HeartIcon from '../../public/images/icons/heart.svg'
import CartIcon from '../../public/images/icons/cart.svg'
import MenuIcon from '../../public/images/icons/menu.svg'
import DownArrowIconBlack from '../../public/images/icons/chevron-down-black.svg'
import GiftIcon from '../../public/images/icons/gift.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layerOne}>
        <div className={styles.findstoreSupport}>
          <div className={styles.findStore}>
            <Image src={FindStoreIcon} alt="icon"/>
            <span>Find Store</span>
          </div>
          <div className={styles.support}>
            <Image src={SupportIcon} alt="icon"/>
            <span>support@vestirmart.com</span>
          </div>
        </div>
        <div className={styles.contactTrackorder}>
          <div className={styles.contact}>
            Contact
          </div>
          <div className={styles.verticalLine}></div>
          <div>
            Track Your Order
          </div>
        </div>
      </div>
      <hr className={styles.line}/>
      <div className={styles.layerTwo}>
        <div className={styles.logo}>
          VM
        </div>
        <div className={styles.search}>
          <div className={styles.dropdown}>
            <span>All Categories</span>
            <Image src={DownArrowIconWhite} alt="icon"/>
          </div>
          <div className={styles.input}>
            <input placeholder='Search products here...'/>
            <div className={styles.button}>
              <Image src={SearchIcon} alt="icon"/>
            </div>
          </div>
        </div>
        <div className={styles.icons}>
          <div>
            <Image src={UserIcon} alt="icon"/>
          </div>
          <div>
            <Image src={RepeatIcon} alt="icon"/>
          </div>
          <div>
            <Image src={HeartIcon} alt="icon"/>
          </div>
          <div>
            <Image src={CartIcon} alt="icon"/>
          </div>
        </div>
      </div>
      <div className={styles.layerThree}>
        <div className={styles.departmentPagelinks}>
          <div className={styles.departmentDropdown}>
            <Image src={MenuIcon} alt="icon"/>
            <span>All Departments</span>
            <Image src={DownArrowIconWhite} alt="icon"/>
          </div>
          <div className={styles.pagelinks}>
            <Link href ="#">Home</Link>
            <Link href ="#">
              <a className={styles.shop}>
                <span>Shop</span>
                <Image src={DownArrowIconBlack} alt="icon"/>
              </a>
            </Link>
            <Link href ="#">
              <a className={styles.featured}>
                <span>Featured</span>
                <Image src={DownArrowIconBlack} alt="icon"/>
              </a>
            </Link>
            <Link href ="#">
              About Us
            </Link>
            <Link href ="#">
              Blog
            </Link>
            <Link href ="#">
              <a className={styles.promotion}>
                <Image src={GiftIcon} alt="icon"/>
                <span>Promotion</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.currencyLanguages}>
          <div className={styles.currency}>
            <span>&#8373; GHS</span>
            <Image src={DownArrowIconBlack} alt="icon"/>
          </div>
          <div className={styles.verticalLineCL}></div>
          <div className={styles.language}>
            <span>English</span>
            <Image src={DownArrowIconBlack} alt="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header