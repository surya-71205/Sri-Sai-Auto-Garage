import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Wrench } from "lucide-react";
import { GARAGE_NAME, PHONE, WHATSAPP_NUMBER } from "@/lib/constants";

export function Navbar() {

  const [scrolled,setScrolled] = useState(false);
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);


  useEffect(()=>{

    const handleScroll=()=>{
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll);

  },[]);



  const navLinks=[
    {label:"Home",href:"#home"},
    {label:"Services",href:"#services"},
    {label:"About",href:"#about"},
    {label:"Gallery",href:"#gallery"},
    {label:"Reviews",href:"#testimonials"},
    {label:"Location",href:"#location"},
  ];



  const closeMenu=()=>{
    setMobileMenuOpen(false);
  };


  return (

    <header
      className={`
      fixed
      top-0
      left-0
      right-0
      z-50
      transition-all
      duration-300

      ${
        scrolled
        ?
        "bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-4"
        :
        "bg-transparent py-6"
      }

      `}
    >


      <div className="
      container
      mx-auto
      px-4
      md:px-6
      flex
      items-center
      justify-between
      ">



        {/* Logo */}

        <a
          href="#home"
          className="
          flex
          items-center
          gap-3
          group
          "
        >

          <div
            className="
            w-10
            h-10
            rounded-xl
            bg-accent/10
            border
            border-accent/30
            flex
            items-center
            justify-center
            group-hover:bg-accent
            transition-all
            "
          >

            <Wrench
              className="
              w-5
              h-5
              text-accent
              group-hover:text-white
              transition-colors
              "
            />

          </div>


          <span
            className="
            font-heading
            font-bold
            text-xl
            md:text-2xl
            uppercase
            tracking-tight
            text-foreground
            "
          >
            {GARAGE_NAME}
          </span>


        </a>





        {/* Desktop navigation */}

        <nav className="hidden lg:flex items-center gap-8">


          <ul className="flex items-center gap-6">

            {navLinks.map(link=>(

              <li key={link.label}>

                <a
                  href={link.href}
                  className="
                  text-sm
                  uppercase
                  tracking-wider
                  font-medium
                  text-muted-foreground
                  hover:text-accent
                  transition-colors
                  "
                >
                  {link.label}
                </a>

              </li>

            ))}

          </ul>





          {/* WhatsApp */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"

            className="
            flex
            items-center
            gap-2
            px-4
            py-2.5
            rounded-full
            border
            border-[#25D366]/40
            text-[#25D366]
            hover:bg-[#25D366]
            hover:text-white
            transition-all
            "
          >

            <MessageCircle className="w-4 h-4"/>

            WhatsApp

          </a>





          {/* Call */}

          <a
            href={`tel:${PHONE}`}

            className="
            flex
            items-center
            gap-2
            bg-accent
            text-white
            px-5
            py-2.5
            rounded-full
            font-semibold
            shadow-[0_0_20px_rgba(230,57,70,0.35)]
            hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(230,57,70,0.5)]
            transition-all
            "
          >

            <Phone className="w-4 h-4"/>

            Call Now

          </a>


        </nav>





        {/* Mobile menu button */}

        <button

          onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}

          className="
          lg:hidden
          p-2
          text-foreground
          z-50
          "

          aria-label="Toggle menu"

        >

          {
            mobileMenuOpen
            ?
            <X/>
            :
            <Menu/>
          }


        </button>





        {/* Mobile drawer */}

        <div

          className={`
          fixed
          inset-0
          bg-[#0A0A0B]/95
          backdrop-blur-xl
          flex
          flex-col
          items-center
          justify-center
          transition-all
          duration-500
          lg:hidden

          ${
            mobileMenuOpen
            ?
            "opacity-100 pointer-events-auto"
            :
            "opacity-0 pointer-events-none"
          }

          `}

        >


          <ul className="
          flex
          flex-col
          gap-8
          text-center
          ">


            {
              navLinks.map(link=>(

                <li key={link.label}>

                  <a

                    href={link.href}

                    onClick={closeMenu}

                    className="
                    text-2xl
                    font-heading
                    font-bold
                    uppercase
                    tracking-widest
                    hover:text-accent
                    transition-colors
                    "

                  >

                    {link.label}

                  </a>

                </li>

              ))
            }


          </ul>





          <div className="
          absolute
          bottom-12
          flex
          flex-col
          gap-4
          ">


            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"

              className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-3
              rounded-full
              bg-[#25D366]
              text-white
              font-semibold
              "
            >

              <MessageCircle/>

              WhatsApp Us

            </a>




            <a

              href={`tel:${PHONE}`}

              className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-3
              rounded-full
              bg-accent
              text-white
              font-semibold
              "

            >

              <Phone/>

              Call Now

            </a>


          </div>


        </div>



      </div>


    </header>

  );

}