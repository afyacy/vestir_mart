import styles from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import DownArrowIconWhite from '../../public/images/icons/chevron-down-white.svg'
import RightArrowIconWhite from '../../public/images/icons/chevron-right.svg'
import SearchIcon from '../../public/images/icons/search.svg'
import MenuIcon from '../../public/images/icons/menu.svg'
import GiftIcon from '../../public/images/icons/gift.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layerOne}>
        <div className={styles.findstoreSupport}>
          <Link  href="#">
            <a className={styles.findStore}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.findStoreImage}>
              <path d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.0752 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.0752 14 6.6665Z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Find Store</span>
            </a>
          </Link>
          <Link href="#">
            <a className={styles.support}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.supportImage}>
                <path d="M2.66683 3.1665H13.3335C14.0668 3.1665 14.6668 3.7665 14.6668 4.49984V12.4998C14.6668 13.2332 14.0668 13.8332 13.3335 13.8332H2.66683C1.9335 13.8332 1.3335 13.2332 1.3335 12.4998V4.49984C1.3335 3.7665 1.9335 3.1665 2.66683 3.1665Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.6668 4.5L8.00016 9.16667L1.3335 4.5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>support@vestirmart.com</span>
            </a>
          </Link>
        </div>
        <div className={styles.contactTrackorder}>
          <Link href="#">
            <a className={styles.contact}>Contact</a>
          </Link>
          <div className={styles.verticalLine}></div>
          <Link href="#" className={styles.trackorder}>
            Track Your Order
          </Link>
        </div>
      </div>
      <hr className={styles.line}/>
      <div className={styles.layerTwo}>
        <div className={styles.logo}>
          <Link href="/">VM</Link>
        </div>
        <div className={styles.search}>
          <div className={styles.dropdown}>
            <span>All Categories</span>
            <Image src={DownArrowIconWhite} alt="icon"/>
            <div className={styles.categoryItems}>
              <Link href ="#" className={styles.item}>
                <a>Home</a>
              </Link>
              <Link href ="#">
              <a className={styles}>
                <span>Shop</span>
                <Image src={RightArrowIconWhite} alt="icon"/>
              </a>
              </Link>
              <Link href ="#">
                <a className={styles}>
                  <span>Featured</span>
                  <Image src={RightArrowIconWhite} alt="icon"/>
                </a>
              </Link>
              <Link href ="#">
                About Us
              </Link>
              <Link href ="#">
                Blog
              </Link>
              <Link href ="#">
                <a className={styles}>
                  <span>Promotion</span>
                  <Image src={GiftIcon} alt="icon"/>
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.input}>
            <input placeholder='Search products here...'/>
            <div className={styles.button}>
              <Image src={SearchIcon} alt="icon" className={styles.searchImage}/>
            </div>
          </div>
        </div>
        <div className={styles.icons}>
          <Link href="#">
            <a>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.userImage}>
                <path d="M20.219 21.25V19.25C20.219 18.1891 19.7976 17.1717 19.0474 16.4216C18.2973 15.6714 17.2799 15.25 16.219 15.25H8.21899C7.15813 15.25 6.14071 15.6714 5.39057 16.4216C4.64042 17.1717 4.21899 18.1891 4.21899 19.25V21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.219 11.25C14.4281 11.25 16.219 9.45914 16.219 7.25C16.219 5.04086 14.4281 3.25 12.219 3.25C10.0099 3.25 8.21899 5.04086 8.21899 7.25C8.21899 9.45914 10.0099 11.25 12.219 11.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.repeatImage}>
                <g clipPath="url(#clip0_1946_13162)">
                <path d="M17.219 1.25L21.219 5.25L17.219 9.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.21899 11.25V9.25C3.21899 8.18913 3.64042 7.17172 4.39057 6.42157C5.14071 5.67143 6.15813 5.25 7.21899 5.25H21.219" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.21899 23.25L3.21899 19.25L7.21899 15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.219 13.25V15.25C21.219 16.3109 20.7976 17.3283 20.0474 18.0784C19.2973 18.8286 18.2799 19.25 17.219 19.25H3.21899" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1946_13162">
                <rect width="24" height="24" fill="white" transform="translate(0.218994 0.25)"/>
                </clipPath>
                </defs>
              </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heartImage}>
                <path d="M21.0589 4.86012C20.5481 4.34912 19.9417 3.94376 19.2742 3.6672C18.6068 3.39064 17.8914 3.24829 17.1689 3.24829C16.4464 3.24829 15.731 3.39064 15.0635 3.6672C14.3961 3.94376 13.7896 4.34912 13.2789 4.86012L12.2189 5.92012L11.1589 4.86012C10.1272 3.82842 8.7279 3.24883 7.26887 3.24883C5.80984 3.24883 4.41056 3.82842 3.37887 4.86012C2.34718 5.89181 1.76758 7.29108 1.76758 8.75012C1.76758 10.2091 2.34718 11.6084 3.37887 12.6401L4.43887 13.7001L12.2189 21.4801L19.9989 13.7001L21.0589 12.6401C21.5699 12.1294 21.9752 11.5229 22.2518 10.8555C22.5283 10.188 22.6707 9.4726 22.6707 8.75012C22.6707 8.02763 22.5283 7.31222 22.2518 6.64476C21.9752 5.9773 21.5699 5.37087 21.0589 4.86012V4.86012Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
          </Link>
          <Link href="#">
            <a>
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cartImage}>
                <path d="M6.21899 2.25L3.21899 6.25V20.25C3.21899 20.7804 3.42971 21.2891 3.80478 21.6642C4.17985 22.0393 4.68856 22.25 5.21899 22.25H19.219C19.7494 22.25 20.2581 22.0393 20.6332 21.6642C21.0083 21.2891 21.219 20.7804 21.219 20.25V6.25L18.219 2.25H6.21899Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.21899 6.25H21.219" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.219 10.25C16.219 11.3109 15.7976 12.3283 15.0474 13.0784C14.2973 13.8286 13.2799 14.25 12.219 14.25C11.1581 14.25 10.1407 13.8286 9.39057 13.0784C8.64042 12.3283 8.21899 11.3109 8.21899 10.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="23.262" cy="21.75" r="7" fill="white"/>
                <path d="M23.012 25.8693C22.3699 25.8693 21.823 25.6946 21.3713 25.3452C20.9196 24.9929 20.5745 24.483 20.3358 23.8153C20.0972 23.1449 19.9779 22.3352 19.9779 21.3864C19.9779 20.4432 20.0972 19.6378 20.3358 18.9702C20.5773 18.2997 20.9239 17.7884 21.3756 17.4361C21.8301 17.081 22.3756 16.9034 23.012 16.9034C23.6483 16.9034 24.1924 17.081 24.6441 17.4361C25.0986 17.7884 25.4452 18.2997 25.6838 18.9702C25.9253 19.6378 26.0461 20.4432 26.0461 21.3864C26.0461 22.3352 25.9267 23.1449 25.6881 23.8153C25.4495 24.483 25.1043 24.9929 24.6526 25.3452C24.2009 25.6946 23.654 25.8693 23.012 25.8693ZM23.012 24.9318C23.6483 24.9318 24.1426 24.625 24.4949 24.0114C24.8472 23.3977 25.0233 22.5227 25.0233 21.3864C25.0233 20.6307 24.9424 19.9872 24.7804 19.456C24.6213 18.9247 24.3912 18.5199 24.0901 18.2415C23.7918 17.9631 23.4324 17.8239 23.012 17.8239C22.3813 17.8239 21.8884 18.1349 21.5333 18.7571C21.1782 19.3764 21.0006 20.2528 21.0006 21.3864C21.0006 22.142 21.0801 22.7841 21.2392 23.3125C21.3983 23.8409 21.627 24.2429 21.9253 24.5185C22.2265 24.794 22.5887 24.9318 23.012 24.9318Z" fill="#374151"/>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.layerThree}>
        <div className={styles.departmentPagelinks}>
          <div className={styles.departmentDropdown}>
            <Image src={MenuIcon} alt="icon"/>
            <span>All Departments</span>
            <Image src={DownArrowIconWhite} alt="icon"/>
            <div className={styles.departmentItems}>
              <Link href ="#" className={styles.item}>
                <a>Keyboard</a>
              </Link>
              <Link href ="#">
              <a className={styles}>
                <span>Mouse</span>
                <Image src={RightArrowIconWhite} alt="icon"/>
              </a>
              </Link>
              <Link href ="#">
                <a>
                  <span>Headset</span>
                  <Image src={RightArrowIconWhite} alt="icon"/>
                </a>
              </Link>
              <Link href ="#">
                Speaker
              </Link>
              <Link href ="#">
                Earpiece
              </Link>
              <Link href ="#">
                Mouse Pad
              </Link>
              <Link href ="#">
                Smart TV
              </Link>
              <Link href ="#">
                Combo
              </Link>
            </div>
          </div>
          <div className={styles.pagelinks}>
            <Link href ="#">Home</Link>
            <Link href ="#">
              <a className={styles.shop}>
                <span>Shop</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.shopImage}>
                  <path d="M4 6L8 10L12 6" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </Link>
            <Link href ="#">
              <a className={styles.featured}>
                <span>Featured</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featuredImage}>
                  <path d="M4 6L8 10L12 6" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.promoImage}>
                  <path d="M13.3334 8V14.6667H2.66675V8" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6666 4.6665H1.33325V7.99984H14.6666V4.6665Z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14.6665V4.6665" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99992 4.66683H4.99992C4.55789 4.66683 4.13397 4.49123 3.82141 4.17867C3.50885 3.86611 3.33325 3.44219 3.33325 3.00016C3.33325 2.55814 3.50885 2.13421 3.82141 1.82165C4.13397 1.50909 4.55789 1.3335 4.99992 1.3335C7.33325 1.3335 7.99992 4.66683 7.99992 4.66683Z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 4.66683H11C11.442 4.66683 11.866 4.49123 12.1785 4.17867C12.4911 3.86611 12.6667 3.44219 12.6667 3.00016C12.6667 2.55814 12.4911 2.13421 12.1785 1.82165C11.866 1.50909 11.442 1.3335 11 1.3335C8.66667 1.3335 8 4.66683 8 4.66683Z" stroke="#374151" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Promotion</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.currencyLanguages}>
          <div className={styles.currency}>
            <span>&#8373; GHS</span>
          </div>
          <div className={styles.verticalLineCL}></div>
          <div className={styles.language}>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header