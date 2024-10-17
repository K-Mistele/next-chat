'use client'
import {useRef, useEffect} from 'react'

function DesktopBackground() {

    const svgRef = useRef<SVGSVGElement>(null);
    const groupRef = useRef<SVGGElement>(null);

    useEffect(() => {
        const updateScale = () => {
            if (svgRef.current && groupRef.current) {
                const screenWidth = window.innerWidth;
                const svgWidth = 896; // Original SVG width
                const scale = screenWidth / svgWidth;
                groupRef.current.setAttribute('transform', `scale(${scale})`);
                // Adjust SVG height to maintain aspect ratio
                svgRef.current.setAttribute('height', `${504 * scale}px`);
            }
        };

        window.addEventListener('resize', updateScale);
        updateScale(); // Initial scale update

        return () => window.removeEventListener('resize', updateScale);
    }, []);


    return (<div className={'absolute top-0 left-0 z-0 w-full h-full'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" ref={svgRef}
            className={'scale-x-'}>
                <defs>

                </defs>
                <rect width="100%" height="100%" fill="#000000"/>
                <g ref={groupRef}>
                    <filter id="blur-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
                    </filter>
                    <path fill="#ffffff" opacity="0.8461296337214499"
                          transform="translate(0, 0) rotate(0, 0, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 2
L0 0.185
L0.185 0
L2 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8713251418960228"
                          transform="translate(0, 0) rotate(0, 20, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 2
L20 0.185
L20.185 0
L22 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8947386701651248"
                          transform="translate(0, 0) rotate(0, 40, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 2
L40 0.185
L40.185 0
L42 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9161817065660649"
                          transform="translate(0, 0) rotate(0, 60, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 2
L60 0.185
L60.185 0
L62 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9354816043780438"
                          transform="translate(0, 0) rotate(0, 80, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 2
L80 0.185
L80.185 0
L82 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 100, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 2
L100 0.185
L100.185 0
L102 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 120, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 2
L120 0.185
L120.185 0
L122 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 140, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 2
L140 0.185
L140.185 0
L142 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 160, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 2
L160 0.185
L160.185 0
L162 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 180, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 2
L180 0.185
L180.185 0
L182 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 200, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 2
L200 0.185
L200.185 0
L202 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 220, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 2
L220 0.185
L220.185 0
L222 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 240, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 2
L240 0.185
L240.185 0
L242 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 260, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 2
L260 0.185
L260.185 0
L262 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 280, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 2
L280 0.185
L280.185 0
L282 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 300, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 2
L300 0.185
L300.185 0
L302 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 320, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.814 2
L320 0.185
L320.185 0
L322 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 340, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M341.814 2
L340 0.185
L340.185 0
L342 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 360, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M361.814 2
L360 0.185
L360.185 0
L362 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 380, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M381.814 2
L380 0.185
L380.185 0
L382 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 400, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M401.814 2
L400 0.185
L400.185 0
L402 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 420, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M421.814 2
L420 0.185
L420.185 0
L422 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 440, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M441.814 2
L440 0.185
L440.185 0
L442 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 460, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M461.814 2
L460 0.185
L460.185 0
L462 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 480, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M481.814 2
L480 0.185
L480.185 0
L482 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 500, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M501.814 2
L500 0.185
L500.185 0
L502 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 520, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M521.814 2
L520 0.185
L520.185 0
L522 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 540, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M541.814 2
L540 0.185
L540.185 0
L542 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 560, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M561.814 2
L560 0.185
L560.185 0
L562 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 580, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.814 2
L580 0.185
L580.185 0
L582 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 600, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 2
L600 0.185
L600.185 0
L602 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 620, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 2
L620 0.185
L620.185 0
L622 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 640, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 2
L640 0.185
L640.185 0
L642 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 660, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 2
L660 0.185
L660.185 0
L662 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 680, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 2
L680 0.185
L680.185 0
L682 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 700, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 2
L700 0.185
L700.185 0
L702 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 720, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 2
L720 0.185
L720.185 0
L722 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 740, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 2
L740 0.185
L740.185 0
L742 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 760, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 2
L760 0.185
L760.185 0
L762 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 780, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 2
L780 0.185
L780.185 0
L782 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 800, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 2
L800 0.185
L800.185 0
L802 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 820, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 2
L820 0.185
L820.185 0
L822 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 840, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 2
L840 0.185
L840.185 0
L842 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 860, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 2
L860 0.185
L860.185 0
L862 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 880, 0) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 2
L880 0.185
L880.185 0
L882 1.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8713251418960228"
                          transform="translate(0, 0) rotate(0, 0, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 22
L0 20.185
L0.185 20
L2 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8947386701651248"
                          transform="translate(0, 0) rotate(0, 20, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 22
L20 20.185
L20.185 20
L22 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9161817065660649"
                          transform="translate(0, 0) rotate(0, 40, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 22
L40 20.185
L40.185 20
L42 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9354816043780438"
                          transform="translate(0, 0) rotate(0, 60, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 22
L60 20.185
L60.185 20
L62 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 80, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 22
L80 20.185
L80.185 20
L82 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 100, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 22
L100 20.185
L100.185 20
L102 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 120, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 22
L120 20.185
L120.185 20
L122 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 140, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 22
L140 20.185
L140.185 20
L142 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 160, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 22
L160 20.185
L160.185 20
L162 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 180, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 22
L180 20.185
L180.185 20
L182 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 200, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 22
L200 20.185
L200.185 20
L202 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 220, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 22
L220 20.185
L220.185 20
L222 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 240, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 22
L240 20.185
L240.185 20
L242 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 260, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 22
L260 20.185
L260.185 20
L262 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 280, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 22
L280 20.185
L280.185 20
L282 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 300, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 22
L300 20.185
L300.185 20
L302 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 320, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.814 22
L320 20.185
L320.185 20
L322 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 340, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M341.814 22
L340 20.185
L340.185 20
L342 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 360, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M361.814 22
L360 20.185
L360.185 20
L362 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 380, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M382.0512957152788 22.261627028973322
L380 20.20920050018003
L380.20920050018003 20
L382.26162702897335 22.051295715278805
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 400, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M402.28292039955215 22.517001543056416
L400 20.232822642732717
L400.23282264273274 20
L402.51700154305644 22.282920399552168
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 420, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M422.4372789968694 22.687187427639888
L420 20.24856483705669
L420.2485648370567 20
L422.6871874276399 22.437278996869377
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 440, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M442.51114582422105 22.768628251621863
L440 20.256098113275023
L440.256098113275 20
L442.76862825162186 22.51114582422103
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 460, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M462.5029141289608 22.75955251263595
L460 20.255258607418824
L460.25525860741885 20
L462.75955251263593 22.502914128960803
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 480, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M482.4127650557539 22.66015992916637
L480 20.24606479344789
L480.2460647934479 20
L482.66015992916635 22.412765055753898
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 500, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M502.2426482385346 22.47260004248583
L500 20.22871550392994
L500.22871550392995 20
L502.47260004248585 22.242648238534645
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 520, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M521.9960786805948 22.200748269674463
L520 20.20356921494489
L520.2035692149449 20
L522.2007482696745 21.99607868059474
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 540, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M541.814 22
L540 20.185
L540.185 20
L542 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 560, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M561.814 22
L560 20.185
L560.185 20
L562 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 580, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.814 22
L580 20.185
L580.185 20
L582 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 600, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 22
L600 20.185
L600.185 20
L602 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 620, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 22
L620 20.185
L620.185 20
L622 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 640, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 22
L640 20.185
L640.185 20
L642 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 660, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 22
L660 20.185
L660.185 20
L662 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 680, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 22
L680 20.185
L680.185 20
L682 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 700, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 22
L700 20.185
L700.185 20
L702 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 720, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 22
L720 20.185
L720.185 20
L722 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 740, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 22
L740 20.185
L740.185 20
L742 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 760, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 22
L760 20.185
L760.185 20
L762 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 780, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 22
L780 20.185
L780.185 20
L782 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 800, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 22
L800 20.185
L800.185 20
L802 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 820, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 22
L820 20.185
L820.185 20
L822 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 840, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 22
L840 20.185
L840.185 20
L842 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 860, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 22
L860 20.185
L860.185 20
L862 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 880, 20) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 22
L880 20.185
L880.185 20
L882 21.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8947386701651248"
                          transform="translate(0, 0) rotate(0, 0, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 42
L0 40.185
L0.185 40
L2 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9161817065660649"
                          transform="translate(0, 0) rotate(0, 20, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 42
L20 40.185
L20.185 40
L22 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9354816043780438"
                          transform="translate(0, 0) rotate(0, 40, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 42
L40 40.185
L40.185 40
L42 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 60, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 42
L60 40.185
L60.185 40
L62 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 80, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 42
L80 40.185
L80.185 40
L82 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 100, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 42
L100 40.185
L100.185 40
L102 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 120, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 42
L120 40.185
L120.185 40
L122 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 140, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 42
L140 40.185
L140.185 40
L142 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 160, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 42
L160 40.185
L160.185 40
L162 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 180, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 42
L180 40.185
L180.185 40
L182 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 200, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 42
L200 40.185
L200.185 40
L202 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 220, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 42
L220 40.185
L220.185 40
L222 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 240, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 42
L240 40.185
L240.185 40
L242 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 260, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 42
L260 40.185
L260.185 40
L262 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 280, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 42
L280 40.185
L280.185 40
L282 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 300, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 42
L300 40.185
L300.185 40
L302 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 320, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.814 42
L320 40.185
L320.185 40
L322 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 340, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M342.2346109228508 42.46373861394793
L340 40.227895821790185
L340.2278958217902 40
L342.46373861394795 42.23461092285078
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 360, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M362.6353624829143 42.90558156881397
L360 40.26876629511529
L360.2687662951153 40
L362.90558156881394 42.635362482914275
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 380, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M382.9651104849932 43.26914055677313
L380 40.302395501501515
L380.3023955015015 40
L383.26914055677315 42.96511048499323
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 400, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M403.2170910346864 43.54695814188135
L400 40.32809362812402
L400.328093628124 40
L403.54695814188136 43.21709103468638
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 420, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M423.38554998561415 43.732690171570184
L420 40.34527384087024
L420.3452738408702 40
L423.7326901715702 43.385549985614155
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 440, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M443.4663232290296 43.82174556673606
L440 40.35351146492309
L440.3535114649231 40
L443.82174556673607 43.46632322902961
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 460, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M463.45731667420125 43.81181551731118
L460 40.35259293535128
L460.3525929353513 40
L463.8118155173112 43.457316674201245
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 480, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M483.3587670707733 43.70316104826163
L480 40.3425423969642
L480.3425423969642 40
L483.7031610482616 43.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 500, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M503.17321186257885 43.498579782336094
L500 40.32361862986609
L500.3236186298661 40
L503.4985797823361 43.17321186257884
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 520, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M522.9051766186114 43.20306132151212
L520 40.296283172239875
L520.2962831722399 40
L523.2030613215121 42.9051766186115
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 540, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M542.5606648372765 42.823224737901306
L540 40.26114828825587
L540.2611482882559 40
L542.8232247379013 42.560664837276484
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 560, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M562.1465725282642 42.366673129287975
L560 40.21891726445914
L560.2189172644592 40
L562.366673129288 42.146572528264194
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 580, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.814 42
L580 40.185
L580.185 40
L582 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 600, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 42
L600 40.185
L600.185 40
L602 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 620, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 42
L620 40.185
L620.185 40
L622 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 640, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 42
L640 40.185
L640.185 40
L642 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 660, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 42
L660 40.185
L660.185 40
L662 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 680, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 42
L680 40.185
L680.185 40
L682 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 700, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 42
L700 40.185
L700.185 40
L702 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 720, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 42
L720 40.185
L720.185 40
L722 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 740, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 42
L740 40.185
L740.185 40
L742 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 760, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 42
L760 40.185
L760.185 40
L762 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 780, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 42
L780 40.185
L780.185 40
L782 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 800, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 42
L800 40.185
L800.185 40
L802 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 820, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 42
L820 40.185
L820.185 40
L822 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 840, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 42
L840 40.185
L840.185 40
L842 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 860, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 42
L860 40.185
L860.185 40
L862 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 880, 40) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 42
L880 40.185
L880.185 40
L882 41.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9161817065660649"
                          transform="translate(0, 0) rotate(0, 0, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 62
L0 60.185
L0.185 60
L2 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9354816043780438"
                          transform="translate(0, 0) rotate(0, 20, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 62
L20 60.185
L20.185 60
L22 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 40, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 62
L40 60.185
L40.185 60
L42 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 60, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 62
L60 60.185
L60.185 60
L62 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 80, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 62
L80 60.185
L80.185 60
L82 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 100, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 62
L100 60.185
L100.185 60
L102 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 120, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 62
L120 60.185
L120.185 60
L122 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 140, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 62
L140 60.185
L140.185 60
L142 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 160, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 62
L160 60.185
L160.185 60
L162 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 180, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 62
L180 60.185
L180.185 60
L182 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 200, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 62
L200 60.185
L200.185 60
L202 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 220, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 62
L220 60.185
L220.185 60
L222 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 240, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 62
L240 60.185
L240.185 60
L242 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 260, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 62
L260 60.185
L260.185 60
L262 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 280, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 62
L280 60.185
L280.185 60
L282 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 300, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M302.0197108988725 62.22680363712516
L300 60.205979336434076
L300.2059793364341 60
L302.22680363712516 62.01971089887252
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 320, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M322.5772205880961 62.84147804641244
L320 60.26283671929315
L320.26283671929315 60
L322.8414780464124 62.57722058809608
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 340, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M343.07732142857145 63.39285714285714
L340 60.31383928571429
L340.31383928571427 60
L343.39285714285717 63.07732142857143
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 360, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M363.5114765520748 63.87152872334593
L360 60.358116406909495
L360.3581164069095 60
L363.87152872334593 63.51147655207476
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 380, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M383.8708581667867 64.26775983107686
L380 60.39476778437461
L380.3947677843746 60
L384.2677598310769 63.87085816678672
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 400, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M404.14693883456 64.57214865993382
L400 60.422923751043875
L400.42292375104387 60
L404.5721486599338 64.14693883455996
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 420, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M424.3322751073866 64.7764885417713
L420 60.441825190113846
L420.44182519011383 60
L424.7764885417713 64.33227510738656
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 440, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M444.42137135965436 64.8747203524304
L440 60.45091163259981
L440.4509116325998 60
L444.8747203524304 64.42137135965437
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 460, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M464.4114291367143 64.8637586953851
L460 60.44989767932312
L460.4498976793231 60
L464.8637586953851 64.41142913671428
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 480, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M484.30276598996073 64.74395368242637
L480 60.438815715624436
L480.43881571562446 60
L484.74395368242637 64.30276598996072
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 500, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M504.09876667225114 64.51903712486346
L500 60.41801093404987
L500.41801093404985 60
L504.5190371248635 64.09876667225116
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 520, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M523.8053832355306 64.1955713732421
L520 60.388090352024896
L520.3880903520248 60
L524.195571373242 63.805383235530584
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 540, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M543.4303448449526 63.78207810909877
L540 60.349842225091635
L540.3498422250916 60
L543.7820781090987 63.430344844952586
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 560, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M562.982296555839 63.28808881569891
L560 60.30414821545215
L560.3041482154522 60
L563.2880888156989 62.982296555838914
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 580, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M582.4700482019074 62.723316650394004
L580 60.25190679016144
L580.2519067901615 60
L582.723316650394 62.47004820190736
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 600, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.9020270113148 62.09705293419485
L600 60.193977396413025
L600.1939773964131 60
L602.0970529341948 61.90202701131473
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 620, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 62
L620 60.185
L620.185 60
L622 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 640, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 62
L640 60.185
L640.185 60
L642 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 660, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 62
L660 60.185
L660.185 60
L662 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 680, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 62
L680 60.185
L680.185 60
L682 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 700, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 62
L700 60.185
L700.185 60
L702 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 720, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 62
L720 60.185
L720.185 60
L722 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 740, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 62
L740 60.185
L740.185 60
L742 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 760, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 62
L760 60.185
L760.185 60
L762 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 780, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 62
L780 60.185
L780.185 60
L782 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 800, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 62
L800 60.185
L800.185 60
L802 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 820, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 62
L820 60.185
L820.185 60
L822 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 840, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 62
L840 60.185
L840.185 60
L842 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 860, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 62
L860 60.185
L860.185 60
L862 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 880, 60) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 62
L880 60.185
L880.185 60
L882 61.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9354816043780438"
                          transform="translate(0, 0) rotate(0, 0, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 82
L0 80.185
L0.185 80
L2 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 20, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 82
L20 80.185
L20.185 80
L22 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 40, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 82
L40 80.185
L40.185 80
L42 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 60, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 82
L60 80.185
L60.185 80
L62 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 80, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 82
L80 80.185
L80.185 80
L82 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 100, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 82
L100 80.185
L100.185 80
L102 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 120, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 82
L120 80.185
L120.185 80
L122 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 140, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 82
L140 80.185
L140.185 80
L142 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 160, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 82
L160 80.185
L160.185 80
L162 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 180, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 82
L180 80.185
L180.185 80
L182 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 200, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 82
L200 80.185
L200.185 80
L202 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 220, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 82
L220 80.185
L220.185 80
L222 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 240, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 82
L240 80.185
L240.185 80
L242 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 260, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 82
L260 80.185
L260.185 80
L262 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 280, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M282.11472580906144 82.33156098022212
L280 80.21566939067054
L280.21566939067054 80
L282.3315609802221 82.11472580906147
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 300, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M302.7610019347539 83.04410356643209
L300 80.28157957989497
L300.281579579895 80
L303.0441035664321 82.7610019347539
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 320, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M323.3587670707733 83.70316104826163
L320 80.3425423969642
L320.3425423969642 80
L323.7031610482616 83.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 340, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M343.89905406023325 84.29884681392865
L340 80.3976433302884
L340.3976433302884 80
L344.29884681392866 83.89905406023328
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 360, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M364.3717673008759 84.82003010019395
L360 80.44585278426794
L360.4458527842679 80
L364.82003010019395 84.3717673008759
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 380, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M384.76605845072663 85.25475022130834
L380 80.48606439547102
L380.48606439547103 80
L385.2547502213083 84.76605845072666
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 400, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M405.0710506509845 85.59101505069953
L400 80.5171688921897
L400.5171688921897 80
L405.5910150506995 85.07105065098446
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 420, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M425.2769271487066 85.81800126649017
L420 80.53816511715034
L420.53816511715036 80
L425.81800126649017 85.27692714870658
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 440, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M445.3762452043985 85.92750298169628
L440 80.54829402580691
L440.5482940258069 80
L445.9275029816963 85.37624520439853
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 460, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M465.3651507477009 85.91527094564599
L460 80.54716256247225
L460.54716256247224 80
L465.915270945646 85.36515074770091
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 480, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M485.2440833002661 85.78178974671013
L480 80.53481555157069
L480.53481555157066 80
L485.78178974671016 85.2440833002661
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 500, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M505.0176929387636 85.53218626104035
L500 80.51172722914623
L500.51172722914623 80
L505.53218626104035 85.0176929387636
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 520, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M524.6940034669052 85.17530701974111
L520 80.47871589932605
L520.4787158993261 80
L525.1753070197411 84.69400346690519
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 540, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M544.2831451413095 84.72232099372607
L540 80.43681469191966
L540.4368146919196 80
L544.722320993726 84.28314514130955
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 560, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M563.7960653511735 84.1852980718561
L560 80.38714007164668
L560.3871400716467 80
L564.1852980718561 83.79606535117348
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 580, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M583.2435077315956 83.57608349679779
L580 80.3307877234538
L580.3307877234538 80
L583.5760834967978 83.2435077315956
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 600, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M602.6353624829143 82.90558156881397
L600 80.2687662951153
L600.2687662951153 80
L602.905581568814 82.63536248291427
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 620, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.9803505588727 82.18340745189934
L620 80.2019651893007
L620.2019651893007 80
L622.1834074518994 81.9803505588727
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 640, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 82
L640 80.185
L640.185 80
L642 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 660, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 82
L660 80.185
L660.185 80
L662 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 680, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 82
L680 80.185
L680.185 80
L682 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 700, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 82
L700 80.185
L700.185 80
L702 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 720, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 82
L720 80.185
L720.185 80
L722 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 740, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 82
L740 80.185
L740.185 80
L742 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 760, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 82
L760 80.185
L760.185 80
L762 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 780, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 82
L780 80.185
L780.185 80
L782 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 800, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 82
L800 80.185
L800.185 80
L802 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 820, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 82
L820 80.185
L820.185 80
L822 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 840, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 82
L840 80.185
L840.185 80
L842 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 860, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 82
L860 80.185
L860.185 80
L862 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 880, 80) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 82
L880 80.185
L880.185 80
L882 81.814
Z"></path>
                    <path fill="#ffffff" opacity="0.952482972172036"
                          transform="translate(0, 0) rotate(0, 0, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 102
L0 100.185
L0.185 100
L2 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 20, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 102
L20 100.185
L20.185 100
L22 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 40, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 102
L40 100.185
L40.185 100
L42 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 60, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 102
L60 100.185
L60.185 100
L62 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 80, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 102
L80 100.185
L80.185 100
L82 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 100, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 102
L100 100.185
L100.185 100
L102 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 120, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 102
L120 100.185
L120.185 100
L122 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 140, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 102
L140 100.185
L140.185 100
L142 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 160, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 102
L160 100.185
L160.185 100
L162 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 180, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 102
L180 100.185
L180.185 100
L182 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 200, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 102
L200 100.185
L200.185 100
L202 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 220, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 102
L220 100.185
L220.185 100
L222 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 240, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 102
L240 100.185
L240.185 100
L242 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 260, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M262.0512957152788 102.26162702897332
L260 100.20920050018003
L260.20920050018003 100
L262.26162702897335 102.05129571527881
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 280, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M282.77786401627367 103.0626946155167
L280 100.28329925193529
L280.2832992519353 100
L283.0626946155167 102.77786401627365
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 300, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M303.4663232290296 103.82174556673607
L300 100.35351146492309
L300.3535114649231 100
L303.82174556673607 103.46632322902961
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 320, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M324.10838155619996 104.52963787894151
L320 100.41899150380209
L320.4189915038021 100
L324.5296378789415 104.10838155619996
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 340, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M344.6940034669052 105.17530701974111
L340 100.47871589932605
L340.47871589932606 100
L345.1753070197411 104.69400346690519
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 360, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M365.21136796712364 105.74571991965121
L360 100.53147909256774
L360.53147909256774 100
L365.7457199196512 105.21136796712365
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 380, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M385.64715102313295 106.22618635406056
L380 100.5759222377506
L380.5759222377506 100
L386.2261863540606 105.64715102313293
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 400, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M405.98733867130363 106.60125542591359
L400 100.610616126897
L400.610616126897 100
L406.60125542591356 105.98733867130362
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 420, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M426.21871067154797 106.85635134680042
L420 100.63421249957904
L420.63421249957906 100
L426.8563513468004 106.21871067154798
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 440, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M446.33087612744407 106.980017781085
L440 100.64565164475036
L440.6456516447504 100
L446.980017781085 106.33087612744409
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 460, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M466.3183280348456 106.96618305936667
L460 100.64437193299142
L460.6443719329914 100
L466.9661830593667 106.31832803484558
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 480, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M486.1816988012716 106.815544433596
L480 100.63043786010763
L480.63043786010763 100
L486.815544433596 106.18169880127158
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 500, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M505.9276101316193 106.53540257069386
L500 100.60452473778918
L500.6045247377892 100
L506.53540257069386 105.92761013161933
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 520, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M525.5671935927778 106.1380304220263
L520 100.56776781403744
L520.5677678140374 100
L526.1380304220263 105.56719359277785
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 540, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M545.1139782338258 105.63834424898101
L540 100.52154684303075
L540.5215468430307 100
L545.6383442489811 105.11397823382579
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 560, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M564.5819366857977 105.05174937794676
L560 100.46728681746008
L560.46728681746 100
L565.0517493779467 104.58193668579771
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 580, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M583.9841375305871 104.3926543887399
L580 100.40632053095844
L580.4063205309584 100
L584.3926543887399 103.98413753058709
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 600, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M603.3320539822596 103.67370891098082
L600 100.33981807426572
L600.3398180742657 100
L603.6737089109808 103.3320539822596
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 620, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M622.6353624829143 102.90558156881397
L620 100.2687662951153
L620.2687662951153 100
L622.905581568814 102.63536248291427
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 640, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.9020270113148 102.09705293419485
L640 100.19397739641302
L640.1939773964131 100
L642.0970529341948 101.90202701131473
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 660, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 102
L660 100.185
L660.185 100
L662 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 680, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 102
L680 100.185
L680.185 100
L682 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 700, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 102
L700 100.185
L700.185 100
L702 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 720, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 102
L720 100.185
L720.185 100
L722 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 740, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 102
L740 100.185
L740.185 100
L742 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 760, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 102
L760 100.185
L760.185 100
L762 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 780, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 102
L780 100.185
L780.185 100
L782 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 800, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 102
L800 100.185
L800.185 100
L802 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 820, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 102
L820 100.185
L820.185 100
L822 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 840, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 102
L840 100.185
L840.185 100
L842 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 860, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 102
L860 100.185
L860.185 100
L862 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 880, 100) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 102
L880 100.185
L880.185 100
L882 101.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9670489249312062"
                          transform="translate(0, 0) rotate(0, 0, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 122
L0 120.185
L0.185 120
L2 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 20, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 122
L20 120.185
L20.185 120
L22 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 40, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 122
L40 120.185
L40.185 120
L42 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 60, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 122
L60 120.185
L60.185 120
L62 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 80, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 122
L80 120.185
L80.185 120
L82 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 100, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 122
L100 120.185
L100.185 120
L102 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 120, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 122
L120 120.185
L120.185 120
L122 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 140, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 122
L140 120.185
L140.185 120
L142 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 160, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 122
L160 120.185
L160.185 120
L162 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 180, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 122
L180 120.185
L180.185 120
L182 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 200, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 122
L200 120.185
L200.185 120
L202 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 220, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 122
L220 120.185
L220.185 120
L222 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 240, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.83198132575112 122.01982505595491
L240 120.18683381767583
L240.18683381767582 120
L242.0198250559549 121.8319813257511
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 260, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M262.6270376448662 122.89640313656695
L260 120.26791729013244
L260.26791729013246 120
L262.89640313656696 122.62703764486622
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 280, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M283.3944932357864 123.74255042534335
L280 120.34618591434426
L280.34618591434423 120
L283.7425504253433 123.39449323578641
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 300, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M304.12764058726464 124.55087165078788
L300 120.42095562769788
L300.4209556276979 120
L304.5508716507879 124.12764058726461
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 320, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M324.81788803763874 125.31189419805813
L320 120.49135021332037
L320.4913502133204 120
L325.31189419805816 124.81788803763872
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 340, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M345.45432923099105 126.01359341895373
L340 120.55625739125323
L340.5562573912532 120
L346.01359341895375 125.45432923099104
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 360, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M366.02340165431605 126.64101615690855
L360 120.61429399451404
L360.614293994514 120
L366.64101615690856 126.02340165431606
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 380, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M386.50887886866536 127.17627218154949
L380 120.66380517679333
L380.66380517679335 120
L387.1762721815495 126.50887886866539
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 400, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M406.892598128042 127.59933641459975
L400 120.70293861835047
L400.70293861835046 120
L407.59933641459975 126.89259812804197
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 420, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M427.15636876418307 127.8901529924841
L420 120.72983915180478
L420.72983915180475 120
L427.8901529924841 127.15636876418309
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 440, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M447.28515404576683 128.0321433801178
L440 120.7429732626609
L440.7429732626609 120
L448.03214338011776 127.28515404576683
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 460, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M467.27071526534235 128.01622410732344
L460 120.74150072992742
L460.7415007299274 120
L468.0162241073234 127.27071526534236
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 480, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M487.11400812980077 127.8434488751938
L480 120.72551902095543
L480.7255190209554 120
L487.8434488751938 127.11400812980078
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 500, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M506.8248901216084 127.52468591136535
L500 120.6960334468013
L500.6960334468013 120
L507.52468591136534 126.82489012160838
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 520, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M526.419326293803 127.07753725887873
L520 120.65467219644628
L520.6546721964463 120
L527.0775372588787 126.41932629380301
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 540, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M545.9157200983711 126.52229338298912
L540 120.6033121379265
L540.6033121379265 120
L546.5222933829891 125.91572009837112
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 560, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M565.3319566455837 125.87867325863688
L560 120.54377727642391
L560.543777276424 120
L565.8786732586369 125.33195664558365
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 580, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M584.6837574056465 125.16401037006229
L580 120.47767095923076
L580.4776709592307 120
L585.1640103700623 124.68375740564649
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 600, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M603.9841375305871 124.3926543887399
L600 120.40632053095844
L600.4063205309584 120
L604.3926543887399 123.98413753058709
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 620, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M623.2435077315956 123.57608349679779
L620 120.3307877234538
L620.3307877234538 120
L623.5760834967978 123.2435077315956
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 640, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M642.4700482019074 122.72331665039401
L640 120.25190679016144
L640.2519067901615 120
L642.723316650394 122.47004820190736
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 660, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 122
L660 120.185
L660.185 120
L662 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 680, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 122
L680 120.185
L680.185 120
L682 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 700, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 122
L700 120.185
L700.185 120
L702 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 720, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 122
L720 120.185
L720.185 120
L722 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 740, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 122
L740 120.185
L740.185 120
L742 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 760, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 122
L760 120.185
L760.185 120
L762 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 780, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 122
L780 120.185
L780.185 120
L782 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 800, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 122
L800 120.185
L800.185 120
L802 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 820, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 122
L820 120.185
L820.185 120
L822 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 840, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 122
L840 120.185
L840.185 120
L842 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 860, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 122
L860 120.185
L860.185 120
L862 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 880, 120) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 122
L880 120.185
L880.185 120
L882 121.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9790621861685793"
                          transform="translate(0, 0) rotate(0, 0, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 142
L0 140.185
L0.185 140
L2 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 20, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 142
L20 140.185
L20.185 140
L22 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 40, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 142
L40 140.185
L40.185 140
L42 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 60, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 142
L60 140.185
L60.185 140
L62 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 80, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 142
L80 140.185
L80.185 140
L82 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 100, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 142
L100 140.185
L100.185 140
L102 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 120, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 142
L120 140.185
L120.185 140
L122 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 140, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 142
L140 140.185
L140.185 140
L142 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 160, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 142
L160 140.185
L160.185 140
L162 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 180, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 142
L180 140.185
L180.185 140
L182 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 200, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 142
L200 140.185
L200.185 140
L202 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 220, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 142
L220 140.185
L220.185 140
L222 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 240, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M242.3152415605577 142.55263678121025
L240 140.23611890226195
L240.23611890226195 140
L242.55263678121025 142.3152415605577
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 260, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M263.1469727296454 143.46965019806552
L260 140.32094264332108
L260.3209426433211 140
L263.46965019806555 143.14697272964543
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 280, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M283.9556930145841 144.3612932906109
L280 140.40341962938152
L280.4034196293815 140
L284.3612932906109 143.95569301458409
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 300, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M304.7351060685649 145.2206241108764
L300 140.48290773025607
L300.48290773025604 140
L305.2206241108764 144.7351060685649
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 320, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M325.4767767282254 146.03834258900267
L320 140.55854668948274
L320.55854668948274 140
L326.03834258900264 145.47677672822542
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 340, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M346.1694024516168 146.8019872674937
L340 140.62918382224316
L340.6291838222432 140
L346.8019872674937 146.16940245161678
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 360, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M366.7979954905243 147.49503361689557
L360 140.69329060956284
L360.69329060956284 140
L367.49503361689557 146.79799549052427
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 380, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M387.34324209767584 148.09618753878263
L380 140.7488973473374
L380.7488973473374 140
L388.09618753878266 147.34324209767584
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 400, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M407.7816834357549 148.5795848244266
L400 140.79361159625947
L400.79361159625944 140
L408.5795848244266 147.78168343575493
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 420, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M428.08779765349334 148.9170867182947
L420 140.82483052144227
L420.82483052144227 140
L428.91708671829474 148.0877976534933
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 440, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M448.23889062709463 149.08367213571626
L440 140.84023967255376
L440.84023967255376 140
L449.08367213571626 148.23889062709466
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 460, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M468.22189308888795 149.06493174078054
L460 140.8385061860222
L460.8385061860222 140
L469.06493174078054 148.22189308888795
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 480, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M488.038344597001 148.86256295148956
L480 140.81978707301278
L480.8197870730128 140
L488.86256295148956 148.03834459700101
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 500, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M507.70376564778104 148.49367767120293
L500 140.78566518458626
L500.78566518458626 140
L508.49367767120293 147.70376564778107
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 520, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M527.2419359952397 147.98449393080452
L520 140.7385656885994
L520.7385656885995 140
L527.9844939308045 147.24193599523971
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 540, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M546.6782617833255 147.36302291436107
L540 140.6810796195784
L540.6810796195784 140
L547.3630229143611 146.6782617833255
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 560, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M566.0354608290334 146.65431182914375
L560 140.6155238441958
L560.6155238441958 140
L566.6543118291438 146.03546082903338
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 580, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M585.3319566455837 145.87867325863687
L580 140.54377727642392
L580.543777276424 140
L585.8786732586369 145.33195664558366
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 600, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M604.5819366857977 145.05174937794675
L600 140.46728681746006
L600.46728681746 140
L605.0517493779467 144.5819366857977
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 620, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M623.7960653511735 144.1852980718561
L620 140.38714007164668
L620.3871400716467 140
L624.1852980718561 143.79606535117347
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 640, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M642.982296555839 143.28808881569893
L640 140.30414821545216
L640.3041482154522 140
L643.2880888156989 142.98229655583893
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 660, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.1465725282642 142.36667312928796
L660 140.21891726445915
L660.2189172644592 140
L662.366673129288 142.1465725282642
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 680, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 142
L680 140.185
L680.185 140
L682 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 700, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 142
L700 140.185
L700.185 140
L702 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 720, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 142
L720 140.185
L720.185 140
L722 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 740, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 142
L740 140.185
L740.185 140
L742 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 760, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 142
L760 140.185
L760.185 140
L762 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 780, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 142
L780 140.185
L780.185 140
L782 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 800, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 142
L800 140.185
L800.185 140
L802 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 820, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 142
L820 140.185
L820.185 140
L822 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 840, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 142
L840 140.185
L840.185 140
L842 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 860, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 142
L860 140.185
L860.185 140
L862 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 880, 140) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 142
L880 140.185
L880.185 140
L882 141.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9884260321683551"
                          transform="translate(0, 0) rotate(0, 0, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 162
L0 160.185
L0.185 160
L2 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 20, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 162
L20 160.185
L20.185 160
L22 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 40, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 162
L40 160.185
L40.185 160
L42 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 60, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 162
L60 160.185
L60.185 160
L62 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 80, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 162
L80 160.185
L80.185 160
L82 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 100, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 162
L100 160.185
L100.185 160
L102 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 120, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 162
L120 160.185
L120.185 160
L122 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 140, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 162
L140 160.185
L140.185 160
L142 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 160, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 162
L160 160.185
L160.185 160
L162 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 180, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 162
L180 160.185
L180.185 160
L182 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 200, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 162
L200 160.185
L200.185 160
L202 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 220, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.8552834901954 162.04551652722756
L220 160.18921027876854
L220.18921027876854 160
L222.04551652722756 161.8552834901954
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 240, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M242.7357578607108 163.01627107024345
L240 160.27900507399752
L240.27900507399752 160
L243.01627107024345 162.7357578607108
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 260, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M263.60239466693696 163.9717692027971
L260 160.36738865125872
L260.36738865125875 160
L263.97176920279713 163.602394666937
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 280, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M284.4512628200097 164.90767675855528
L280 160.45396010016637
L280.45396010016634 160
L284.9076767585553 164.45126282000965
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 300, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M305.2769271487066 165.81800126649017
L300 160.53816511715033
L300.53816511715036 160
L305.81800126649017 165.2769271487066
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 320, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M326.0717541778222 166.69432654666176
L320 160.6192252055662
L320.61922520556624 160
L326.6943265466617 166.0717541778222
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 340, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M346.8248901216084 167.52468591136537
L340 160.6960334468013
L340.6960334468013 160
L347.52468591136534 166.82489012160838
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 360, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M367.5208328874394 168.29198774800375
L360 160.76700886669036
L360.76700886669033 160
L368.29198774800375 167.5208328874394
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 380, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M388.13769800643314 168.972103645461
L380 160.82991958720515
L380.82991958720515 160
L388.972103645461 168.13769800643314
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 400, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M408.6458876934524 169.53240098506325
L400 160.88174709111834
L400.88174709111837 160
L409.53240098506325 168.64588769345238
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 420, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M429.00920836048454 169.932975039123
L420 160.9188001911189
L420.91880019111886 160
L429.932975039123 169.00920836048456
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 440, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M449.1917348976609 170.1342170867265
L440 160.93741508052221
L440.9374150805222 160
L450.1342170867265 169.19173489766095
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 460, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M469.171083099786 170.1114477395656
L460 160.93530891590981
L460.93530891590984 160
L470.1114477395656 169.171083099786
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 480, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M488.94995634421343 169.86764756804126
L480 160.91275740004383
L480.9127574000438 160
L489.86764756804126 168.94995634421343
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 500, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M508.5546192280829 169.4317742316239
L500 160.8724391164252
L500.8724391164252 160
L509.43177423162393 168.55461922808288
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 520, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M528.0219575865647 168.84449568529737
L520 160.81811585089
L520.81811585089 160
L528.8444956852974 168.02195758656472
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 540, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M547.3871642524202 168.14461328822523
L540 160.75337672916083
L540.7533767291608 160
L548.1446132882252 167.3871642524203
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 560, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M566.6782617833255 167.36302291436107
L560 160.6810796195784
L560.6810796195784 160
L567.3630229143611 166.6782617833255
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 580, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M585.9157200983711 166.52229338298912
L580 160.60331213792648
L580.6033121379265 160
L586.5222933829891 165.91572009837114
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 600, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.1139782338258 165.638344248981
L600 160.52154684303073
L600.5215468430307 160
L605.6383442489811 165.11397823382578
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 620, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M624.2831451413095 164.72232099372607
L620 160.43681469191966
L620.4368146919196 160
L624.722320993726 164.28314514130955
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 640, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M643.4303448449526 163.78207810909876
L640 160.34984222509163
L640.3498422250916 160
L643.7820781090987 163.43034484495257
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 660, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.5606648372765 162.8232247379013
L660 160.26114828825587
L660.2611482882559 160
L662.8232247379013 162.56066483727648
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 680, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 162
L680 160.185
L680.185 160
L682 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 700, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 162
L700 160.185
L700.185 160
L702 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 720, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 162
L720 160.185
L720.185 160
L722 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 740, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 162
L740 160.185
L740.185 160
L742 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 760, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 162
L760 160.185
L760.185 160
L762 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 780, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 162
L780 160.185
L780.185 160
L782 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 800, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 162
L800 160.185
L800.185 160
L802 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 820, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 162
L820 160.185
L820.185 160
L822 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 840, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 162
L840 160.185
L840.185 160
L842 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 860, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 162
L860 160.185
L860.185 160
L862 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 880, 160) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 162
L880 160.185
L880.185 160
L882 161.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9950650707483959"
                          transform="translate(0, 0) rotate(0, 0, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 182
L0 180.185
L0.185 180
L2 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 20, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 182
L20 180.185
L20.185 180
L22 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 40, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 182
L40 180.185
L40.185 180
L42 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 60, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 182
L60 180.185
L60.185 180
L62 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 80, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 182
L80 180.185
L80.185 180
L82 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 100, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 182
L100 180.185
L100.185 180
L102 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 120, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 182
L120 180.185
L120.185 180
L122 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 140, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 182
L140 180.185
L140.185 180
L142 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 160, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 182
L160 180.185
L160.185 180
L162 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 180, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 182
L180 180.185
L180.185 180
L182 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 200, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 182
L200 180.185
L200.185 180
L202 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 220, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.17850800695544 182.40188313887037
L220 180.2221741903455
L220.2221741903455 180
L222.40188313887037 182.17850800695544
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 240, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.0860026196012 183.4024284670355
L240 180.3147246332008
L240.3147246332008 180
L243.4024284670355 183.0860026196012
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 260, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M263.9841375305871 184.3926543887399
L260 180.40632053095845
L260.40632053095845 180
L264.3926543887399 183.9841375305871
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 280, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M284.8700251536324 185.3693772366399
L280 180.4966673943892
L280.4966673943892 180
L285.36937723663993 184.87002515363238
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 300, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M305.7395261666707 186.32803325983542
L300 180.58534307653477
L300.5853430765348 180
L306.3280332598354 185.73952616667071
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 320, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M326.5865476190476 187.26190476190476
L320 180.6717261904762
L320.6717261904762 180
L327.26190476190476 186.58654761904762
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 340, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M347.4018740808041 188.160831401107
L340 180.75487690460238
L340.7548769046024 180
L348.160831401107 187.40187408080405
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 360, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M368.17121948732733 189.0090622793025
L360 180.8333382608355
L360.8333382608355 180
L369.0090622793025 188.17121948732736
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 380, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M388.87210740717717 189.7818163254434
L380 180.90481801010353
L380.9048180101035 180
L389.7818163254434 188.87210740717717
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 400, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M409.46958272053604 190.44055426740468
L400 180.96575126973494
L400.96575126973494 180
L410.44055426740465 189.46958272053604
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 420, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M429.91309236299486 190.92953954023687
L420 181.01098240747191
L421.0109824074719 180
L430.9295395402369 189.91309236299483
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 440, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M450.14295001915616 191.18296584250956
L440 181.03442434043214
L441.0344243404321 180
L451.18296584250953 190.14295001915616
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 460, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M470.11666224623525 191.1539826309099
L460 181.03174339335916
L461.0317433933592 180
L471.15398263090987 190.11666224623528
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 480, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M489.8395899766937 190.84850052557184
L480 181.0034862986154
L481.00348629861537 180
L490.84850052557186 189.83958997669367
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 500, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M509.3605651556789 190.3203584957871
L500 180.9546331608603
L500.9546331608603 180
L510.3203584957871 189.3605651556789
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 520, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M528.7388676758072 189.6349147473067
L520 180.89122961412588
L520.8912296141259 180
L529.6349147473067 188.73886767580717
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 540, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M548.0219575865647 188.84449568529737
L540 180.81811585089
L540.81811585089 180
L548.8444956852974 188.02195758656472
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 560, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M567.2419359952397 187.98449393080452
L560 180.7385656885994
L560.7385656885995 180
L567.9844939308045 187.24193599523971
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 580, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M586.419326293803 187.07753725887875
L580 180.65467219644628
L580.6546721964463 180
L587.0775372588787 186.419326293803
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 600, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.5671935927778 186.1380304220263
L600 180.56776781403744
L600.5677678140374 180
L606.1380304220263 185.56719359277787
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 620, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M624.6940034669052 185.17530701974113
L620 180.47871589932606
L620.4787158993261 180
L625.1753070197411 184.6940034669052
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 640, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M643.8053832355306 184.1955713732421
L640 180.3880903520249
L640.3880903520248 180
L644.195571373242 183.8053832355306
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 660, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.9051766186114 183.20306132151214
L660 180.29628317223987
L660.2962831722399 180
L663.2030613215121 182.9051766186115
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 680, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.9960786805948 182.20074826967448
L680 180.20356921494488
L680.2035692149449 180
L682.2007482696745 181.99607868059474
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 700, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 182
L700 180.185
L700.185 180
L702 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 720, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 182
L720 180.185
L720.185 180
L722 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 740, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 182
L740 180.185
L740.185 180
L742 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 760, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 182
L760 180.185
L760.185 180
L762 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 780, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 182
L780 180.185
L780.185 180
L782 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 800, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 182
L800 180.185
L800.185 180
L802 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 820, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 182
L820 180.185
L820.185 180
L822 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 840, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 182
L840 180.185
L840.185 180
L842 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 860, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 182
L860 180.185
L860.185 180
L862 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 880, 180) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 182
L880 180.185
L880.185 180
L882 181.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9989258482737464"
                          transform="translate(0, 0) rotate(0, 0, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 202
L0 200.185
L0.185 200
L2 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 20, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 202
L20 200.185
L20.185 200
L22 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 40, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 202
L40 200.185
L40.185 200
L42 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 60, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 202
L60 200.185
L60.185 200
L62 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 80, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 202
L80 200.185
L80.185 200
L82 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 100, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 202
L100 200.185
L100.185 200
L102 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 120, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 202
L120 200.185
L120.185 200
L122 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 140, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 202
L140 200.185
L140.185 200
L142 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 160, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 202
L160 200.185
L160.185 200
L162 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 180, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 202
L180 200.185
L180.185 200
L182 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 200, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 202
L200 200.185
L200.185 200
L202 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 220, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.4291017086659 202.67817167438358
L220 200.2477308798805
L220.2477308798805 200
L222.67817167438358 202.4291017086659
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 240, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.3587670707733 203.70316104826162
L240 200.3425423969642
L240.3425423969642 200
L243.70316104826162 203.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 260, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.28314514130955 204.72232099372607
L260 200.43681469191966
L260.43681469191966 200
L264.7223209937261 204.28314514130955
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 280, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.2004911554685 205.73372784505904
L280 200.53036982566795
L280.53036982566795 200
L285.73372784505904 205.20049115546854
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 300, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.1082232276851 206.7345349809097
L300 200.62294448573414
L300.62294448573414 200
L306.7345349809097 206.10822322768507
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 320, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.002374978478 207.72036932577504
L320 200.7141341626342
L320.7141341626342 200
L327.72036932577504 207.00237497847795
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 340, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M347.87658359399967 208.68421564939325
L340 200.80328994756889
L340.8032899475689 200
L348.68421564939325 207.8765835939997
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 360, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M368.7201300927216 209.61425589054204
L360 200.88931866987514
L360.88931866987514 200
L369.61425589054204 208.72013009272163
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 380, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M389.5140030987142 210.4895293260355
L380 200.97028146265828
L380.9702814626583 200
L390.4895293260355 209.5140030987142
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 400, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M410.2230391151845 211.2712669406665
L400 201.04259219201165
L401.0425921920116 200
L411.27126694066646 210.2230391151845
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 420, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M430.78256039013945 211.88815919530256
L420 201.0996547255655
L421.0996547255655 200
L431.8881591953026 210.78256039013942
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 440, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M451.0906862922472 212.22787904327143
L440 201.13107881150262
L441.1310788115026 200
L452.22787904327146 211.0906862922472
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 460, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M471.05461108152633 212.1881048307898
L460 201.12739969684804
L461.12739969684804 200
L472.18810483078977 211.05461108152633
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 480, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M490.6870733397241 211.78288130068813
L480 201.08991652031366
L481.08991652031364 200
L491.78288130068813 210.68707333972412
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 500, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M510.09057109919405 211.1252162063882
L500 201.02908249909092
L501.0290824990909 200
L511.1252162063882 210.09057109919408
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 520, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M529.3605651556788 210.3203584957871
L520 200.9546331608603
L520.9546331608603 200
L530.3203584957871 209.3605651556789
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 540, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M548.5546192280829 209.4317742316239
L540 200.8724391164252
L540.8724391164252 200
L549.4317742316239 208.55461922808288
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 560, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M567.7037656477811 208.49367767120293
L560 200.78566518458626
L560.7856651845863 200
L568.4936776712029 207.70376564778107
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 580, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M586.8248901216084 207.52468591136537
L580 200.6960334468013
L580.6960334468013 200
L587.5246859113654 206.82489012160838
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 600, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.9276101316193 206.53540257069386
L600 200.60452473778918
L600.6045247377892 200
L606.5354025706938 205.92761013161933
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 620, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.0176929387636 205.53218626104035
L620 200.51172722914623
L620.5117272291462 200
L625.5321862610404 205.0176929387636
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 640, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.0987666722511 204.51903712486347
L640 200.41801093404987
L640.4180109340499 200
L644.5190371248634 204.09876667225114
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 660, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.1732118625788 203.4985797823361
L660 200.32361862986608
L660.3236186298661 200
L663.498579782336 203.17321186257882
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 680, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.2426482385347 202.47260004248582
L680 200.22871550392995
L680.22871550393 200
L682.4726000424859 202.24264823853466
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 700, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 202
L700 200.185
L700.185 200
L702 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 720, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 202
L720 200.185
L720.185 200
L722 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 740, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 202
L740 200.185
L740.185 200
L742 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 760, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 202
L760 200.185
L760.185 200
L762 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 780, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 202
L780 200.185
L780.185 200
L782 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 800, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 202
L800 200.185
L800.185 200
L802 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 820, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 202
L820 200.185
L820.185 200
L822 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 840, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 202
L840 200.185
L840.185 200
L842 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 860, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 202
L860 200.185
L860.185 200
L862 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 880, 200) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 202
L880 200.185
L880.185 200
L882 201.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9999772800338731"
                          transform="translate(0, 0) rotate(0, 0, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 222
L0 220.185
L0.185 220
L2 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 20, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 222
L20 220.185
L20.185 220
L22 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 40, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 222
L40 220.185
L40.185 220
L42 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 60, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 222
L60 220.185
L60.185 220
L62 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 80, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 222
L80 220.185
L80.185 220
L82 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 100, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 222
L100 220.185
L100.185 220
L102 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 120, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 222
L120 220.185
L120.185 220
L122 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 140, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 222
L140 220.185
L140.185 220
L142 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 160, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 222
L160 220.185
L160.185 220
L162 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 180, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 222
L180 220.185
L180.185 220
L182 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 200, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 222
L200 220.185
L200.185 220
L202 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 220, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.60210092229448 222.8689095063886
L220 220.26537412934096
L220.26537412934096 220
L222.8689095063886 222.60210092229448
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 240, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.5477451689888 223.91151617308577
L240 220.36181524601042
L240.36181524601042 220
L243.91151617308577 223.5477451689888
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 260, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.4912706040601 224.9517867740464
L260 220.4580402765993
L260.4580402765993 220
L264.9517867740464 224.49127060406008
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 280, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.43194338611704 225.98891222284126
L280 220.55397438061283
L280.55397438061283 220
L285.98891222284124 225.431943386117
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 300, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.3686509571574 227.02166588440727
L300 220.64950409430767
L300.64950409430764 220
L307.0216658844073 226.3686509571574
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 320, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.29962588970665 228.04809910662254
L320 220.74444916736257
L320.7444491673626 220
L328.04809910662254 227.29962588970665
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 340, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M348.22189308888795 229.06493174078054
L340 220.8385061860222
L340.8385061860222 220
L349.06493174078054 228.22189308888795
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 360, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M369.13006541869464 230.06622427639982
L360 220.931125745567
L360.931125745567 220
L370.06622427639985 229.13006541869464
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 380, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M390.01343472253967 231.04017058714408
L380 221.02121577931084
L381.0212157793108 220
L391.0401705871441 230.01343472253967
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 400, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M410.848055147024 231.96036951160312
L400 221.10633417982328
L401.1063341798233 220
L411.9603695116031 230.848055147024
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 420, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M431.57294418205635 232.75958564725067
L420 221.18026167237068
L421.1802616723707 220
L432.7595856472507 231.57294418205635
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 440, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M452.0286564724267 233.26202477665564
L440 221.22673729184064
L441.22673729184066 220
L453.2620247766556 232.02865647242666
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 460, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M471.9717305392551 233.19926189554036
L460 221.2209317253375
L461.2209317253375 220
L473.19926189554036 231.9717305392551
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 480, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M491.442274522581 232.61551766546964
L480 221.16693538405593
L481.16693538405593 220
L492.61551766546967 231.44227452258096
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 500, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M510.6870733397241 231.78288130068813
L500 221.08991652031366
L501.08991652031364 220
L511.78288130068813 230.68707333972412
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 520, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M529.8395899766937 230.84850052557184
L520 221.0034862986154
L521.0034862986154 220
L530.8485005255718 229.83958997669367
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 540, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M548.9499563442134 229.86764756804126
L540 220.91275740004383
L540.9127574000438 220
L549.8676475680413 228.94995634421343
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 560, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M568.038344597001 228.86256295148956
L560 220.81978707301278
L560.8197870730128 220
L568.8625629514895 228.03834459700101
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 580, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M587.1140081298008 227.84344887519381
L580 220.72551902095543
L580.7255190209554 220
L587.8434488751938 227.1140081298008
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 600, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M606.1816988012715 226.81554443359602
L600 220.63043786010763
L600.6304378601076 220
L606.815544433596 226.18169880127158
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 620, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.2440833002661 225.78178974671013
L620 220.5348155515707
L620.5348155515707 220
L625.7817897467102 225.24408330026608
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 640, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.3027659899607 224.74395368242637
L640 220.43881571562443
L640.4388157156244 220
L644.7439536824264 224.3027659899607
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 660, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.3587670707733 223.70316104826162
L660 220.3425423969642
L660.3425423969642 220
L663.7031610482617 223.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 680, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.4127650557539 222.66015992916635
L680 220.24606479344789
L680.2460647934479 220
L682.6601599291664 222.4127650557539
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 700, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 222
L700 220.185
L700.185 220
L702 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 720, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 222
L720 220.185
L720.185 220
L722 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 740, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 222
L740 220.185
L740.185 220
L742 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 760, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 222
L760 220.185
L760.185 220
L762 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 780, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 222
L780 220.185
L780.185 220
L782 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 800, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 222
L800 220.185
L800.185 220
L802 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 820, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 222
L820 220.185
L820.185 220
L822 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 840, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 222
L840 220.185
L840.185 220
L842 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 860, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 222
L860 220.185
L860.185 220
L862 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 880, 220) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 222
L880 220.185
L880.185 220
L882 221.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9982109005184752"
                          transform="translate(0, 0) rotate(0, 0, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 242
L0 240.185
L0.185 240
L2 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 20, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 242
L20 240.185
L20.185 240
L22 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 40, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 242
L40 240.185
L40.185 240
L42 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 60, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 242
L60 240.185
L60.185 240
L62 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 80, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 242
L80 240.185
L80.185 240
L82 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 100, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 242
L100 240.185
L100.185 240
L102 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 120, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 242
L120 240.185
L120.185 240
L122 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 140, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 242
L140 240.185
L140.185 240
L142 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 160, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 242
L160 240.185
L160.185 240
L162 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 180, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 242
L180 240.185
L180.185 240
L182 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 200, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 242
L200 240.185
L200.185 240
L202 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 220, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.69381419116613 242.9700266716275
L220 240.27472746712553
L220.27472746712553 240
L222.9700266716275 242.69381419116613
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 240, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.64816504221233 244.02223268160122
L240 240.37205652304812
L240.37205652304812 240
L244.02223268160122 243.64816504221233
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 260, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.6022087026776 245.07410000295215
L260 240.46935425027308
L260.46935425027306 240
L265.07410000295215 244.60220870267761
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 280, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.555835940642 246.1255082035744
L280 240.56660950883062
L280.56660950883065 240
L286.1255082035744 245.55583594064197
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 300, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.50887886866536 247.17627218154948
L300 240.66380517679332
L300.66380517679335 240
L307.1762721815495 246.5088788686654
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 320, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.4610655674493 248.22609213610727
L320 240.76091352258993
L320.76091352258993 240
L328.22609213610724 247.46106556744928
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 340, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M348.41192502873423 249.27444876376433
L340 240.8578865106482
L340.8578865106482 240
L349.2744487637643 248.41192502873426
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 360, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M369.3605651556789 250.3203584957871
L360 240.9546331608603
L360.9546331608603 240
L370.3203584957871 249.3605651556789
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 380, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M390.30507139729 251.36171047110258
L380 241.050958218577
L381.05095821857697 240
L391.3617104711026 250.30507139729005
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 400, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M411.24048470864 252.39303716498347
L400 241.14635593776097
L401.146355937761 240
L412.39303716498347 251.24048470864
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 420, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M432.14917085893876 253.39489620610664
L420 241.23902789906487
L421.23902789906487 240
L433.39489620610664 252.14917085893873
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 440, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M452.91576378675603 254.24009237790077
L440 241.31720854495583
L441.3172085449558 240
L454.2400923779008 252.915763786756
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 460, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M472.79397794596787 254.10581912455112
L460 241.30478826902097
L461.304788269021 240
L474.1058191245511 252.79397794596787
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 480, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M491.9717305392551 253.19926189554036
L480 241.2209317253375
L481.2209317253375 240
L493.19926189554036 251.9717305392551
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 500, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M511.05461108152633 252.1881048307898
L500 241.12739969684804
L501.12739969684804 240
L512.1881048307898 251.05461108152633
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 520, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M530.1166622462353 251.1539826309099
L520 241.03174339335916
L521.0317433933592 240
L531.1539826309099 250.11666224623528
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 540, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M549.171083099786 250.1114477395656
L540 240.93530891590981
L540.9353089159098 240
L550.1114477395656 249.171083099786
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 560, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M568.221893088888 249.06493174078054
L560 240.8385061860222
L560.8385061860222 240
L569.0649317407806 248.22189308888795
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 580, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M587.2707152653423 248.01622410732344
L580 240.74150072992742
L580.7415007299275 240
L588.0162241073234 247.27071526534235
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 600, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M606.3183280348455 246.96618305936667
L600 240.64437193299142
L600.6443719329914 240
L606.9661830593667 246.31832803484556
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 620, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.3651507477009 245.915270945646
L620 240.54716256247227
L620.5471625624723 240
L625.915270945646 245.3651507477009
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 640, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.4114291367143 244.8637586953851
L640 240.44989767932313
L640.4498976793232 240
L644.8637586953851 244.41142913671428
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 660, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.4573166742013 243.81181551731117
L660 240.35259293535128
L660.3525929353513 240
L663.8118155173112 243.45731667420125
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 680, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.5029141289608 242.75955251263593
L680 240.25525860741882
L680.2552586074188 240
L682.759552512636 242.5029141289608
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 700, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 242
L700 240.185
L700.185 240
L702 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 720, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 242
L720 240.185
L720.185 240
L722 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 740, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 242
L740 240.185
L740.185 240
L742 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 760, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 242
L760 240.185
L760.185 240
L762 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 780, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 242
L780 240.185
L780.185 240
L782 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 800, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 242
L800 240.185
L800.185 240
L802 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 820, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 242
L820 240.185
L820.185 240
L822 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 840, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 242
L840 240.185
L840.185 240
L842 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 860, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 242
L860 240.185
L860.185 240
L862 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 880, 240) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 242
L880 240.185
L880.185 240
L882 241.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9936409315767962"
                          transform="translate(0, 0) rotate(0, 0, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 262
L0 260.185
L0.185 260
L2 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 20, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 262
L20 260.185
L20.185 260
L22 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 40, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 262
L40 260.185
L40.185 260
L42 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 60, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 262
L60 260.185
L60.185 260
L62 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 80, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 262
L80 260.185
L80.185 260
L82 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 100, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 262
L100 260.185
L100.185 260
L102 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 120, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 262
L120 260.185
L120.185 260
L122 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 140, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 262
L140 260.185
L140.185 260
L142 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 160, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 262
L160 260.185
L160.185 260
L162 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 180, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 262
L180 260.185
L180.185 260
L182 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 200, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 262
L200 260.185
L200.185 260
L202 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 220, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.70219001631148 262.9792613189763
L220 260.27558167200533
L220.2755816720053 260
L222.97926131897628 262.7021900163115
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 240, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.65734438864396 264.0323532399603
L240 260.3729926746963
L240.37299267469632 260
L244.03235323996026 263.65734438864393
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 260, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.61236184823025 265.0852942097357
L260 260.47038971440054
L260.47038971440054 260
L265.0852942097357 264.61236184823025
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 280, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.56719359277787 266.1380304220263
L280 260.56776781403744
L280.56776781403744 260
L286.1380304220263 265.56719359277787
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 300, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.52176451781435 267.1904790714601
L300 260.6651193141101
L300.6651193141101 260
L307.1904790714601 266.52176451781435
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 320, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.4759527578095 268.2425057969234
L320 260.7624317862154
L320.7624317862154 260
L328.2425057969234 267.4759527578095
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 340, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M348.42954664375117 269.2938772257455
L340 260.85968364338146
L340.85968364338146 260
L349.2938772257455 268.42954664375117
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 360, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M369.3821435102282 270.3441494048823
L360 260.9568338199516
L360.9568338199516 260
L370.3441494048823 269.3821435102282
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 380, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M390.3328724706235 271.39236215063227
L380 261.0537934989335
L381.0537934989335 260
L391.39236215063227 270.3328724706235
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 400, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M411.27944149749015 272.4359884206066
L400 261.1503289289061
L401.1503289289061 260
L412.4359884206066 271.27944149749015
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 420, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M432.21333614925027 273.4656407378724
L420 261.24557176825317
L421.24557176825317 260
L433.4656407378724 272.21333614925027
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 440, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M453.06431863064523 274.40387941636743
L440 261.33235884601396
L441.33235884601396 260
L454.40387941636743 273.06431863064523
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 460, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M472.91576378675603 274.2400923779008
L460 261.3172085449558
L461.3172085449558 260
L474.2400923779008 272.91576378675603
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 480, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M492.0286564724267 273.2620247766556
L480 261.22673729184066
L481.22673729184066 260
L493.2620247766556 272.0286564724267
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 500, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M511.0906862922472 272.22787904327146
L500 261.1310788115026
L501.1310788115026 260
L512.2278790432714 271.0906862922472
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 520, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M530.1429500191562 271.18296584250953
L520 261.0344243404321
L521.0344243404321 260
L531.1829658425096 270.14295001915616
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 540, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M549.1917348976609 270.1342170867265
L540 260.9374150805222
L540.9374150805222 260
L550.1342170867265 269.1917348976609
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 560, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M568.2388906270946 269.08367213571626
L560 260.84023967255376
L560.8402396725537 260
L569.0836721357163 268.23889062709463
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 580, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M587.2851540457668 268.03214338011776
L580 260.7429732626609
L580.7429732626609 260
L588.0321433801178 267.28515404576683
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 600, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M606.3308761274441 266.980017781085
L600 260.6456516447504
L600.6456516447504 260
L606.9800177810849 266.33087612744407
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 620, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.3762452043985 265.9275029816963
L620 260.5482940258069
L620.5482940258069 260
L625.9275029816963 265.3762452043985
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 640, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.4213713596544 264.8747203524304
L640 260.4509116325998
L640.4509116325999 260
L644.8747203524304 264.42137135965436
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 660, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.4663232290296 263.82174556673607
L660 260.3535114649231
L660.353511464923 260
L663.821745566736 263.4663232290296
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 680, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.511145824221 262.76862825162186
L680 260.256098113275
L680.256098113275 260
L682.7686282516219 262.51114582422105
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 700, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 262
L700 260.185
L700.185 260
L702 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 720, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 262
L720 260.185
L720.185 260
L722 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 740, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 262
L740 260.185
L740.185 260
L742 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 760, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 262
L760 260.185
L760.185 260
L762 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 780, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 262
L780 260.185
L780.185 260
L782 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 800, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 262
L800 260.185
L800.185 260
L802 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 820, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 262
L820 260.185
L820.185 260
L822 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 840, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 262
L840 260.185
L840.185 260
L842 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 860, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 262
L860 260.185
L860.185 260
L862 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 880, 260) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 262
L880 260.185
L880.185 260
L882 261.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9863041679116569"
                          transform="translate(0, 0) rotate(0, 0, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 282
L0 280.185
L0.185 280
L2 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 20, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 282
L20 280.185
L20.185 280
L22 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 40, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 282
L40 280.185
L40.185 280
L42 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 60, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 282
L60 280.185
L60.185 280
L62 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 80, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 282
L80 280.185
L80.185 280
L82 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 100, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 282
L100 280.185
L100.185 280
L102 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 120, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 282
L120 280.185
L120.185 280
L122 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 140, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 282
L140 280.185
L140.185 280
L142 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 160, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 282
L160 280.185
L160.185 280
L162 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 180, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 282
L180 280.185
L180.185 280
L182 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 200, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 282
L200 280.185
L200.185 280
L202 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 220, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.62703764486622 282.89640313656696
L220 280.26791729013246
L220.26791729013243 280
L222.89640313656696 282.6270376448662
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 240, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.57503269733846 283.9416016508693
L240 280.3645981527054
L240.3645981527054 280
L243.9416016508693 283.5750326973385
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 260, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.5213920791912 284.98499677970364
L260 280.4611122021226
L260.4611122021226 280
L264.98499677970364 284.5213920791912
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 280, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.46554524121564 286.0259594721231
L280 280.55740125117137
L280.55740125117137 280
L286.0259594721231 285.46554524121564
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 300, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.4066240146537 287.0635325409633
L300 280.6533767600391
L300.6533767600391 280
L307.0635325409633 286.4066240146537
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 320, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.34324209767584 288.09618753878266
L320 280.7488973473374
L320.7488973473374 280
L328.09618753878266 287.34324209767584
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 340, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M348.273048258562 289.12133214835944
L340 280.84372322372326
L340.84372322372326 280
L349.12133214835944 288.273048258562
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 360, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M369.1917348976609 290.1342170867265
L360 280.9374150805222
L360.9374150805222 280
L370.1342170867265 289.1917348976609
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 380, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M390.09057109919405 291.1252162063882
L380 281.0290824990909
L381.0290824990909 280
L391.1252162063882 290.09057109919405
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 400, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M410.94932413895975 292.07202220392475
L400 281.116662053863
L401.116662053863 280
L412.07202220392475 290.94932413895975
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 420, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M431.71261520725835 292.91357795728595
L420 281.19450596104895
L421.19450596104895 280
L432.91357795728595 291.71261520725835
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 440, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M452.21333614925027 293.4656407378724
L440 281.24557176825317
L441.24557176825317 280
L453.4656407378724 292.21333614925027
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 460, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M472.14917085893876 293.39489620610664
L460 281.23902789906487
L461.23902789906487 280
L473.39489620610664 292.14917085893876
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 480, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M491.57294418205635 292.7595856472507
L480 281.1802616723707
L481.1802616723707 280
L492.7595856472507 291.57294418205635
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 500, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M510.78256039013945 291.8881591953026
L500 281.0996547255655
L501.0996547255655 280
L511.8881591953026 290.78256039013945
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 520, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M529.9130923629948 290.9295395402369
L520 281.0109824074719
L521.0109824074719 280
L530.9295395402369 289.91309236299486
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 540, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M549.0092083604845 289.932975039123
L540 280.91880019111886
L540.9188001911189 280
L549.932975039123 289.00920836048454
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 560, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M568.0877976534933 288.91708671829474
L560 280.82483052144227
L560.8248305214422 280
L568.9170867182947 288.08779765349334
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 580, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M587.1563687641831 287.8901529924841
L580 280.72983915180475
L580.7298391518048 280
L587.8901529924841 287.15636876418307
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 600, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M606.218710671548 286.8563513468004
L600 280.63421249957906
L600.634212499579 280
L606.8563513468005 286.21871067154797
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 620, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.2769271487066 285.81800126649017
L620 280.53816511715036
L620.5381651171504 280
L625.8180012664901 285.2769271487066
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 640, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.3322751073865 284.7764885417713
L640 280.44182519011383
L640.4418251901138 280
L644.7764885417713 284.3322751073866
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 660, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.3855499856141 283.7326901715702
L660 280.3452738408702
L660.3452738408703 280
L663.7326901715702 283.38554998561415
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 680, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.4372789968694 282.6871874276399
L680 280.2485648370567
L680.2485648370567 280
L682.6871874276399 282.4372789968694
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 700, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 282
L700 280.185
L700.185 280
L702 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 720, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 282
L720 280.185
L720.185 280
L722 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 740, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 282
L740 280.185
L740.185 280
L742 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 760, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 282
L760 280.185
L760.185 280
L762 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 780, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 282
L780 280.185
L780.185 280
L782 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 800, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 282
L800 280.185
L800.185 280
L802 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 820, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 282
L820 280.185
L820.185 280
L822 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 840, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 282
L840 280.185
L840.185 280
L842 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 860, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 282
L860 280.185
L860.185 280
L862 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 880, 280) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 282
L880 280.185
L880.185 280
L882 281.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9762596808301411"
                          transform="translate(0, 0) rotate(0, 0, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 302
L0 300.185
L0.185 300
L2 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 20, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 302
L20 300.185
L20.185 300
L22 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 40, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 302
L40 300.185
L40.185 300
L42 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 60, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 302
L60 300.185
L60.185 300
L62 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 80, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 302
L80 300.185
L80.185 300
L82 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 100, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 302
L100 300.185
L100.185 300
L102 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 120, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 302
L120 300.185
L120.185 300
L122 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 140, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 302
L140 300.185
L140.185 300
L142 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 160, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 302
L160 300.185
L160.185 300
L162 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 180, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 302
L180 300.185
L180.185 300
L182 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 200, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 302
L200 300.185
L200.185 300
L202 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 220, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.47004820190736 302.723316650394
L220 300.25190679016146
L220.25190679016146 300
L222.723316650394 302.4700482019074
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 240, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.40344432610536 303.7524193231592
L240 300.3470987873922
L240.3470987873922 300
L243.7524193231592 303.4034443261054
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 260, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.3322751073866 304.7764885417713
L260 300.44182519011383
L260.44182519011383 300
L264.7764885417713 304.3322751073866
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 280, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M285.25501689550157 305.7938444272343
L280 300.5359306095192
L280.5359306095192 300
L285.7938444272343 305.25501689550157
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 300, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M306.1694024516168 306.8019872674937
L300 300.6291838222432
L300.6291838222432 300
L306.8019872674937 306.1694024516168
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 320, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M327.07192215702037 307.7970475821614
L320 300.72122690134995
L320.72122690134995 300
L327.7970475821614 307.07192215702037
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 340, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M347.9568849650405 308.77275078835777
L340 300.8114794479231
L340.8114794479231 300
L348.77275078835777 307.9568849650405
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 360, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M368.8145508625353 309.7183581725858
L360 300.8989481309642
L360.8989481309642 300
L369.7183581725858 308.8145508625353
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 380, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M389.6272236646674 310.61435905696516
L380 300.9818282127693
L380.9818282127693 300
L390.61435905696516 309.6272236646674
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 400, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M410.3609117838715 311.4232764982045
L400 301.05665307608393
L401.05665307608393 300
L411.4232764982045 310.3609117838715
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 420, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M430.94932413895975 312.07202220392475
L420 301.116662053863
L421.116662053863 300
L432.07202220392475 310.94932413895975
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 440, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M451.27944149749015 312.4359884206066
L440 301.1503289289061
L441.1503289289061 300
L452.4359884206066 311.27944149749015
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 460, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M471.24048470864 312.39303716498347
L460 301.146355937761
L461.146355937761 300
L472.39303716498347 311.24048470864
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 480, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M490.848055147024 311.9603695116031
L480 301.1063341798233
L481.1063341798233 300
L491.9603695116031 310.848055147024
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 500, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M510.2230391151845 311.27126694066646
L500 301.0425921920116
L501.0425921920116 300
L511.27126694066646 310.2230391151845
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 520, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M529.469582720536 310.44055426740465
L520 300.96575126973494
L520.9657512697349 300
L530.4405542674047 309.46958272053604
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 540, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M548.6458876934523 309.53240098506325
L540 300.88174709111837
L540.8817470911183 300
L549.5324009850633 308.6458876934524
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 560, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M567.781683435755 308.5795848244266
L560 300.79361159625944
L560.7936115962594 300
L568.5795848244265 307.7816834357549
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 580, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M586.892598128042 307.59933641459975
L580 300.70293861835046
L580.7029386183505 300
L587.5993364145997 306.892598128042
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 600, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.9873386713036 306.60125542591356
L600 300.610616126897
L600.610616126897 300
L606.6012554259136 305.98733867130363
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 620, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M625.0710506509845 305.5910150506995
L620 300.5171688921897
L620.5171688921897 300
L625.5910150506995 305.0710506509845
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 640, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M644.1469388345599 304.5721486599338
L640 300.42292375104387
L640.4229237510439 300
L644.5721486599338 304.14693883456
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 660, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M663.2170910346864 303.54695814188136
L660 300.328093628124
L660.3280936281241 300
L663.5469581418813 303.2170910346864
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 680, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.2829203995522 302.51700154305644
L680 300.23282264273274
L680.2328226427327 300
L682.5170015430564 302.28292039955215
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 700, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 302
L700 300.185
L700.185 300
L702 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 720, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 302
L720 300.185
L720.185 300
L722 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 740, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 302
L740 300.185
L740.185 300
L742 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 760, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 302
L760 300.185
L760.185 300
L762 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 780, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 302
L780 300.185
L780.185 300
L782 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 800, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 302
L800 300.185
L800.185 300
L802 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 820, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 302
L820 300.185
L820.185 300
L822 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 840, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 302
L840 300.185
L840.185 300
L842 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 860, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 302
L860 300.185
L860.185 300
L862 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 880, 300) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 302
L880 300.185
L880.185 300
L882 301.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9635883426361669"
                          transform="translate(0, 0) rotate(0, 0, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 322
L0 320.185
L0.185 320
L2 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 20, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 322
L20 320.185
L20.185 320
L22 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 40, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 322
L40 320.185
L40.185 320
L42 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 60, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 322
L60 320.185
L60.185 320
L62 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 80, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 322
L80 320.185
L80.185 320
L82 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 100, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 322
L100 320.185
L100.185 320
L102 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 120, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 322
L120 320.185
L120.185 320
L122 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 140, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 322
L140 320.185
L140.185 320
L142 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 160, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 322
L160 320.185
L160.185 320
L162 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 180, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 322
L180 320.185
L180.185 320
L182 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 200, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 322
L200 320.185
L200.185 320
L202 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 220, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M222.23461092285078 322.46373861394795
L220 320.2278958217902
L220.22789582179018 320
L222.46373861394792 322.2346109228508
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 240, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M243.14697272964543 323.46965019806555
L240 320.3209426433211
L240.32094264332108 320
L243.46965019806552 323.1469727296454
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 260, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M264.0508373912728 324.46619337516296
L260 320.4131228872026
L260.4131228872026 320
L264.46619337516296 324.0508373912728
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 280, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M284.9435443448969 325.4504347793792
L280 320.5041652170926
L280.5041652170926 320
L285.4504347793792 324.9435443448969
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 300, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M305.8212536576896 326.41814074717706
L300 320.5936780191139
L300.5936780191139 320
L306.41814074717706 325.8212536576896
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 320, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M326.6782617833255 327.36302291436107
L320 320.6810796195784
L320.6810796195784 320
L327.36302291436107 326.6782617833255
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 340, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M347.50583615009043 328.2754533077072
L340 320.7654794309629
L340.7654794309629 320
L348.2754533077072 327.50583615009043
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 360, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M368.29020939654777 329.14025291791376
L360 320.845473394907
L360.845473394907 320
L369.14025291791376 328.29020939654777
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 380, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M389.00920836048454 329.932975039123
L380 320.91880019111886
L380.91880019111886 320
L389.932975039123 329.00920836048454
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 400, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M409.6272236646674 330.61435905696516
L400 320.9818282127693
L400.9818282127693 320
L410.61435905696516 329.6272236646674
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 420, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M430.09057109919405 331.1252162063882
L420 321.0290824990909
L421.0290824990909 320
L431.1252162063882 330.09057109919405
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 440, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M450.3328724706235 331.39236215063227
L440 321.0537934989335
L441.0537934989335 320
L451.39236215063227 330.3328724706235
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 460, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M470.30507139729 331.3617104711026
L460 321.05095821857697
L461.05095821857697 320
L471.3617104711026 330.30507139729
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 480, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M490.01343472253967 331.0401705871441
L480 321.0212157793108
L481.0212157793108 320
L491.0401705871441 330.01343472253967
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 500, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M509.5140030987142 330.4895293260355
L500 320.9702814626583
L500.9702814626583 320
L510.4895293260355 329.5140030987142
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 520, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M528.8721074071772 329.7818163254434
L520 320.9048180101035
L520.9048180101036 320
L529.7818163254434 328.87210740717717
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 540, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M548.1376980064332 328.972103645461
L540 320.82991958720515
L540.8299195872052 320
L548.9721036454611 328.13769800643314
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 560, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M567.3432420976759 328.09618753878266
L560 320.7488973473374
L560.7488973473374 320
L568.0961875387826 327.34324209767584
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 580, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M586.5088788686654 327.1762721815495
L580 320.66380517679335
L580.6638051767933 320
L587.1762721815495 326.50887886866536
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 600, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.6471510231329 326.2261863540606
L600 320.5759222377506
L600.5759222377505 320
L606.2261863540606 325.64715102313295
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 620, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M624.7660584507266 325.2547502213083
L620 320.48606439547103
L620.486064395471 320
L625.2547502213083 324.76605845072663
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 640, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M643.8708581667867 324.2677598310769
L640 320.3947677843746
L640.3947677843746 320
L644.2677598310769 323.8708581667867
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 660, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.9651104849933 323.26914055677315
L660 320.3023955015015
L660.3023955015016 320
L663.2691405567731 322.9651104849932
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 680, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M682.0512957152788 322.26162702897335
L680 320.20920050018003
L680.20920050018 320
L682.2616270289733 322.0512957152788
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 700, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 322
L700 320.185
L700.185 320
L702 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 720, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 322
L720 320.185
L720.185 320
L722 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 740, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 322
L740 320.185
L740.185 320
L742 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 760, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 322
L760 320.185
L760.185 320
L762 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 780, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 322
L780 320.185
L780.185 320
L782 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 800, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 322
L800 320.185
L800.185 320
L802 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 820, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 322
L820 320.185
L820.185 320
L822 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 840, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 322
L840 320.185
L840.185 320
L842 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 860, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 322
L860 320.185
L860.185 320
L862 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 880, 320) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 322
L880 320.185
L880.185 320
L882 321.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9483921754942455"
                          transform="translate(0, 0) rotate(0, 0, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 342
L0 340.185
L0.185 340
L2 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 20, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 342
L20 340.185
L20.185 340
L22 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 40, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 342
L40 340.185
L40.185 340
L42 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 60, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 342
L60 340.185
L60.185 340
L62 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 80, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 342
L80 340.185
L80.185 340
L82 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 100, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 342
L100 340.185
L100.185 340
L102 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 120, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 342
L120 340.185
L120.185 340
L122 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 140, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 342
L140 340.185
L140.185 340
L142 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 160, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 342
L160 340.185
L160.185 340
L162 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 180, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 342
L180 340.185
L180.185 340
L182 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 200, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 342
L200 340.185
L200.185 340
L202 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 220, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.92546892506132 342.12289848408085
L220 340.1963681097775
L220.19636810977747 340
L222.12289848408085 341.9254689250613
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 240, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M242.81166720830942 343.0999638459861
L240 340.2867466557537
L240.28674665575372 340
L243.0999638459861 342.8116672083094
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 260, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M263.6849333914179 344.06277110409917
L260 340.37580632712917
L260.37580632712917 340
L264.06277110409917 343.6849333914179
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 280, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M284.541528676604 345.00719809989414
L280 340.4631658242402
L280.4631658242402 340
L285.00719809989414 344.541528676604
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 300, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M305.3762452043985 345.9275029816963
L300 340.5482940258069
L300.5482940258069 340
L305.9275029816963 345.3762452043985
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 320, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M326.1816988012716 346.815544433596
L320 340.63043786010763
L320.63043786010763 340
L326.815544433596 346.1816988012716
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 340, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M346.9472602910036 347.65960340794226
L340 340.70851331523465
L340.70851331523465 340
L347.65960340794226 346.9472602910036
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 360, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M367.65750493709766 348.4426735800415
L360 340.78094730615385
L360.78094730615385 340
L368.4426735800415 347.65750493709766
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 380, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M388.29020939654777 349.14025291791376
L380 340.845473394907
L380.845473394907 340
L389.14025291791376 348.29020939654777
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 400, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M408.8145508625353 349.7183581725858
L400 340.8989481309642
L400.8989481309642 340
L409.7183581725858 348.8145508625353
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 420, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M429.1917348976609 350.1342170867265
L420 340.9374150805222
L420.9374150805222 340
L430.1342170867265 349.1917348976609
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 440, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M449.3821435102282 350.3441494048823
L440 340.9568338199516
L440.9568338199516 340
L450.3441494048823 349.3821435102282
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 460, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M469.3605651556789 350.3203584957871
L460 340.9546331608603
L460.9546331608603 340
L470.3203584957871 349.3605651556789
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 480, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M489.13006541869464 350.06622427639985
L480 340.931125745567
L480.931125745567 340
L490.06622427639985 349.13006541869464
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 500, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M508.7201300927216 349.61425589054204
L500 340.88931866987514
L500.88931866987514 340
L509.61425589054204 348.7201300927216
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 520, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M528.1712194873273 349.0090622793025
L520 340.8333382608355
L520.8333382608355 340
L529.0090622793025 348.17121948732733
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 540, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M547.5208328874394 348.29198774800375
L540 340.76700886669033
L540.7670088666904 340
L548.2919877480037 347.5208328874394
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 560, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M566.7979954905243 347.49503361689557
L560 340.69329060956284
L560.6932906095628 340
L567.4950336168955 346.7979954905243
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 580, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M586.0234016543161 346.64101615690856
L580 340.614293994514
L580.614293994514 340
L586.6410161569086 346.02340165431605
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 600, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M605.2113679671237 345.7457199196512
L600 340.53147909256774
L600.5314790925678 340
L605.7457199196513 345.21136796712364
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 620, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M624.371767300876 344.82003010019395
L620 340.4458527842679
L620.4458527842679 340
L624.8200301001939 344.3717673008759
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 640, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M643.5114765520748 343.87152872334593
L640 340.3581164069095
L640.3581164069095 340
L643.8715287233459 343.5114765520748
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 660, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.6353624829143 342.90558156881394
L660 340.2687662951153
L660.2687662951153 340
L662.905581568814 342.6353624829143
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 680, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 342
L680 340.185
L680.185 340
L682 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 700, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 342
L700 340.185
L700.185 340
L702 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 720, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 342
L720 340.185
L720.185 340
L722 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 740, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 342
L740 340.185
L740.185 340
L742 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 760, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 342
L760 340.185
L760.185 340
L762 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 780, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 342
L780 340.185
L780.185 340
L782 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 800, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 342
L800 340.185
L800.185 340
L802 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 820, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 342
L820 340.185
L820.185 340
L822 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 840, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 342
L840 340.185
L840.185 340
L842 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 860, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 342
L860 340.185
L860.185 340
L862 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 880, 340) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 342
L880 340.185
L880.185 340
L882 341.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9307935300070025"
                          transform="translate(0, 0) rotate(0, 0, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 362
L0 360.185
L0.185 360
L2 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 20, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 362
L20 360.185
L20.185 360
L22 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 40, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 362
L40 360.185
L40.185 360
L42 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 60, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 362
L60 360.185
L60.185 360
L62 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 80, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 362
L80 360.185
L80.185 360
L82 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 100, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 362
L100 360.185
L100.185 360
L102 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 120, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 362
L120 360.185
L120.185 360
L122 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 140, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 362
L140 360.185
L140.185 360
L142 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 160, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 362
L160 360.185
L160.185 360
L162 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 180, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 362
L180 360.185
L180.185 360
L182 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 200, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 362
L200 360.185
L200.185 360
L202 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 220, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 362
L220 360.185
L220.185 360
L222 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 240, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M242.40460566490253 362.6511639083821
L240 360.24523266152534
L240.24523266152534 360
L242.65116390838207 362.40460566490253
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 260, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M263.24350773159557 363.57608349679776
L260 360.3307877234538
L260.3307877234538 360
L263.57608349679776 363.24350773159557
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 280, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M284.06040399285956 364.4767408962068
L280 360.4140985328991
L280.4140985328991 360
L284.4767408962068 364.06040399285956
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 300, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M304.849133052882 365.34634294694814
L300 360.4945367225927
L300.4945367225927 360
L305.34634294694814 364.849133052882
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 320, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M325.60136325183714 366.17570369552055
L320 360.5712525918357
L320.5712525918357 360
L326.17570369552055 365.60136325183714
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 340, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M346.3058015137108 366.95237212096004
L340 360.6430944211888
L340.6430944211888 360
L346.95237212096004 366.3058015137108
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 360, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M366.9472602910036 367.65960340794226
L360 360.70851331523465
L360.70851331523465 360
L367.65960340794226 366.9472602910036
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 380, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M387.50583615009043 368.2754533077072
L380 360.7654794309629
L380.7654794309629 360
L388.2754533077072 367.50583615009043
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 400, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M407.9568849650405 368.77275078835777
L400 360.8114794479231
L400.8114794479231 360
L408.77275078835777 367.9568849650405
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 420, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M428.273048258562 369.12133214835944
L420 360.84372322372326
L420.84372322372326 360
L429.12133214835944 368.273048258562
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 440, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M448.42954664375117 369.2938772257455
L440 360.85968364338146
L440.85968364338146 360
L449.2938772257455 368.42954664375117
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 460, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M468.41192502873423 369.2744487637643
L460 360.8578865106482
L460.8578865106482 360
L469.2744487637643 368.41192502873423
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 480, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M488.22189308888795 369.06493174078054
L480 360.8385061860222
L480.8385061860222 360
L489.06493174078054 368.22189308888795
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 500, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M507.87658359399967 368.68421564939325
L500 360.8032899475689
L500.8032899475689 360
L508.68421564939325 367.87658359399967
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 520, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M527.4018740808041 368.160831401107
L520 360.7548769046024
L520.7548769046024 360
L528.160831401107 367.4018740808041
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 540, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M546.8248901216084 367.52468591136534
L540 360.6960334468013
L540.6960334468013 360
L547.5246859113654 366.8248901216084
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 560, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M566.1694024516167 366.8019872674937
L560 360.6291838222432
L560.6291838222431 360
L566.8019872674937 366.1694024516168
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 580, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M585.454329230991 366.01359341895375
L580 360.5562573912532
L580.5562573912532 360
L586.0135934189537 365.45432923099105
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 600, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M604.6940034669052 365.1753070197411
L600 360.47871589932606
L600.4787158993261 360
L605.1753070197411 364.6940034669052
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 620, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M623.8990540602333 364.29884681392866
L620 360.3976433302884
L620.3976433302884 360
L624.2988468139287 363.89905406023325
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 640, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M643.0773214285714 363.39285714285717
L640 360.31383928571427
L640.3138392857143 360
L643.3928571428571 363.07732142857145
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 660, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M662.2346109228507 362.46373861394795
L660 360.2278958217902
L660.2278958217902 360
L662.463738613948 362.2346109228508
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 680, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 362
L680 360.185
L680.185 360
L682 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 700, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 362
L700 360.185
L700.185 360
L702 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 720, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 362
L720 360.185
L720.185 360
L722 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 740, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 362
L740 360.185
L740.185 360
L742 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 760, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 362
L760 360.185
L760.185 360
L762 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 780, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 362
L780 360.185
L780.185 360
L782 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 800, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 362
L800 360.185
L800.185 360
L802 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 820, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 362
L820 360.185
L820.185 360
L822 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 840, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 362
L840 360.185
L840.185 360
L842 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 860, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 362
L860 360.185
L860.185 360
L862 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 880, 360) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 362
L880 360.185
L880.185 360
L882 361.814
Z"></path>
                    <path fill="#ffffff" opacity="0.9109341001200653"
                          transform="translate(0, 0) rotate(0, 0, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 382
L0 380.185
L0.185 380
L2 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 20, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 382
L20 380.185
L20.185 380
L22 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 40, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 382
L40 380.185
L40.185 380
L42 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 60, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 382
L60 380.185
L60.185 380
L62 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 80, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 382
L80 380.185
L80.185 380
L82 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 100, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 382
L100 380.185
L100.185 380
L102 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 120, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 382
L120 380.185
L120.185 380
L122 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 140, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 382
L140 380.185
L140.185 380
L142 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 160, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 382
L160 380.185
L160.185 380
L162 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 180, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 382
L180 380.185
L180.185 380
L182 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 200, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 382
L200 380.185
L200.185 380
L202 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 220, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 382
L220 380.185
L220.185 380
L222 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 240, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.93329335889655 382.1315252027525
L240 380.19716608125464
L240.1971660812546 380
L242.13152520275253 381.93329335889655
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 260, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M262.7357578607108 383.0162710702435
L260 380.2790050739975
L260.2790050739975 380
L263.0162710702435 382.7357578607108
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 280, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M283.5114765520748 383.87152872334593
L280 380.3581164069095
L280.3581164069095 380
L283.87152872334593 383.5114765520748
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 300, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M304.25379105944427 384.68995706664197
L300 380.4338210286644
L300.4338210286644 380
L304.68995706664197 384.25379105944427
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 320, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M324.9540980903239 385.46207066187856
L320 380.50524153622376
L320.50524153622376 380
L325.46207066187856 384.9540980903239
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 340, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M345.60136325183714 386.17570369552055
L340 380.5712525918357
L340.5712525918357 380
L346.17570369552055 385.60136325183714
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 360, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M366.1816988012716 386.815544433596
L360 380.63043786010763
L360.63043786010763 380
L366.815544433596 386.1816988012716
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 380, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M386.6782617833255 387.36302291436107
L380 380.6810796195784
L380.6810796195784 380
L387.36302291436107 386.6782617833255
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 400, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M407.07192215702037 387.7970475821614
L400 380.72122690134995
L400.72122690134995 380
L407.7970475821614 387.07192215702037
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 420, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M427.34324209767584 388.09618753878266
L420 380.7488973473374
L420.7488973473374 380
L428.09618753878266 387.34324209767584
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 440, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M447.4759527578095 388.2425057969234
L440 380.7624317862154
L440.7624317862154 380
L448.2425057969234 387.4759527578095
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 460, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M467.4610655674493 388.22609213610724
L460 380.76091352258993
L460.76091352258993 380
L468.22609213610724 387.4610655674493
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 480, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M487.29962588970665 388.04809910662254
L480 380.7444491673626
L480.7444491673626 380
L488.04809910662254 387.29962588970665
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 500, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M507.002374978478 387.72036932577504
L500 380.7141341626342
L500.7141341626342 380
L507.72036932577504 387.002374978478
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 520, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M526.5865476190476 387.26190476190476
L520 380.6717261904762
L520.6717261904762 380
L527.2619047619048 386.5865476190476
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 540, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M546.0717541778222 386.6943265466617
L540 380.61922520556624
L540.6192252055662 380
L546.6943265466617 386.0717541778222
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 560, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M565.4767767282254 386.03834258900264
L560 380.55854668948274
L560.5585466894828 380
L566.0383425890027 385.4767767282254
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 580, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M584.8178880376387 385.31189419805816
L580 380.4913502133204
L580.4913502133204 380
L585.3118941980581 384.81788803763874
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 600, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M604.1083815561999 384.5296378789415
L600 380.4189915038021
L600.4189915038021 380
L604.5296378789415 384.10838155619996
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 620, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M623.3587670707733 383.7031610482616
L620 380.3425423969642
L620.3425423969642 380
L623.7031610482617 383.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 640, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M642.5772205880961 382.8414780464124
L640 380.26283671929315
L640.2628367192932 380
L642.8414780464125 382.5772205880961
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 660, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 382
L660 380.185
L660.185 380
L662 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 680, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 382
L680 380.185
L680.185 380
L682 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 700, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 382
L700 380.185
L700.185 380
L702 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 720, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 382
L720 380.185
L720.185 380
L722 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 740, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 382
L740 380.185
L740.185 380
L742 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 760, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 382
L760 380.185
L760.185 380
L762 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 780, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 382
L780 380.185
L780.185 380
L782 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 800, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 382
L800 380.185
L800.185 380
L802 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 820, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 382
L820 380.185
L820.185 380
L822 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 840, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 382
L840 380.185
L840.185 380
L842 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 860, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 382
L860 380.185
L860.185 380
L862 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 880, 380) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 382
L880 380.185
L880.185 380
L882 381.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8889737822857273"
                          transform="translate(0, 0) rotate(0, 0, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 402
L0 400.185
L0.185 400
L2 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 20, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 402
L20 400.185
L20.185 400
L22 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 40, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 402
L40 400.185
L40.185 400
L42 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 60, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 402
L60 400.185
L60.185 400
L62 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 80, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 402
L80 400.185
L80.185 400
L82 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 100, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 402
L100 400.185
L100.185 400
L102 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 120, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 402
L120 400.185
L120.185 400
L122 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 140, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 402
L140 400.185
L140.185 400
L142 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 160, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 402
L160 400.185
L160.185 400
L162 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 180, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 402
L180 400.185
L180.185 400
L182 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 200, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 402
L200 400.185
L200.185 400
L202 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 220, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 402
L220 400.185
L220.185 400
L222 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 240, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 402
L240 400.185
L240.185 400
L242 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 260, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M262.17051577544527 402.3930714172495
L260 400.2213591060956
L260.2213591060956 400
L262.3930714172495 402.17051577544527
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 280, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M282.9051766186115 403.2030613215121
L280 400.2962831722399
L280.2962831722399 400
L283.2030613215121 402.9051766186115
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 300, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M303.60239466693696 403.97176920279713
L300 400.36738865125875
L300.36738865125875 400
L303.97176920279713 403.60239466693696
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 320, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M324.25379105944427 404.68995706664197
L320 400.4338210286644
L320.4338210286644 400
L324.68995706664197 404.25379105944427
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 340, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M344.849133052882 405.34634294694814
L340 400.4945367225927
L340.4945367225927 400
L345.34634294694814 404.849133052882
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 360, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M365.3762452043985 405.9275029816963
L360 400.5482940258069
L360.5482940258069 400
L365.9275029816963 405.3762452043985
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 380, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M385.8212536576896 406.41814074717706
L380 400.5936780191139
L380.5936780191139 400
L386.41814074717706 405.8212536576896
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 400, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M406.1694024516168 406.8019872674937
L400 400.6291838222432
L400.6291838222432 400
L406.8019872674937 406.1694024516168
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 420, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M426.4066240146537 407.0635325409633
L420 400.6533767600391
L420.6533767600391 400
L427.0635325409633 406.4066240146537
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 440, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M446.52176451781435 407.1904790714601
L440 400.6651193141101
L440.6651193141101 400
L447.1904790714601 406.52176451781435
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 460, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M466.50887886866536 407.1762721815495
L460 400.66380517679335
L460.66380517679335 400
L467.1762721815495 406.50887886866536
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 480, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M486.3686509571574 407.0216658844073
L480 400.64950409430764
L480.64950409430764 400
L487.0216658844073 406.3686509571574
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 500, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M506.1082232276851 406.7345349809097
L500 400.62294448573414
L500.62294448573414 400
L506.7345349809097 406.1082232276851
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 520, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M525.7395261666708 406.3280332598354
L520 400.5853430765348
L520.5853430765347 400
L526.3280332598354 405.7395261666707
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 540, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M545.2769271487066 405.81800126649017
L540 400.53816511715036
L540.5381651171504 400
L545.8180012664901 405.2769271487066
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 560, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M564.7351060685648 405.2206241108764
L560 400.48290773025604
L560.4829077302561 400
L565.2206241108764 404.7351060685649
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 580, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M584.1276405872646 404.5508716507879
L580 400.4209556276979
L580.4209556276979 400
L584.5508716507879 404.12764058726464
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 600, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M603.4663232290296 403.82174556673607
L600 400.3535114649231
L600.353511464923 400
L603.821745566736 403.4663232290296
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 620, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M622.761001934754 403.0441035664321
L620 400.281579579895
L620.2815795798949 400
L623.0441035664321 402.7610019347539
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 640, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M642.0197108988725 402.22680363712516
L640 400.2059793364341
L640.2059793364341 400
L642.2268036371252 402.0197108988725
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 660, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 402
L660 400.185
L660.185 400
L662 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 680, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 402
L680 400.185
L680.185 400
L682 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 700, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 402
L700 400.185
L700.185 400
L702 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 720, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 402
L720 400.185
L720.185 400
L722 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 740, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 402
L740 400.185
L740.185 400
L742 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 760, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 402
L760 400.185
L760.185 400
L762 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 780, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 402
L780 400.185
L780.185 400
L782 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 800, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 402
L800 400.185
L800.185 400
L802 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 820, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 402
L820 400.185
L820.185 400
L822 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 840, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 402
L840 400.185
L840.185 400
L842 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 860, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 402
L860 400.185
L860.185 400
L862 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 880, 400) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 402
L880 400.185
L880.185 400
L882 401.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8650893880707331"
                          transform="translate(0, 0) rotate(0, 0, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 422
L0 420.185
L0.185 420
L2 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 20, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 422
L20 420.185
L20.185 420
L22 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 40, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 422
L40 420.185
L40.185 420
L42 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 60, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 422
L60 420.185
L60.185 420
L62 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 80, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 422
L80 420.185
L80.185 420
L82 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 100, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 422
L100 420.185
L100.185 420
L102 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 120, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 422
L120 420.185
L120.185 420
L122 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 140, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 422
L140 420.185
L140.185 420
L142 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 160, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 422
L160 420.185
L160.185 420
L162 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 180, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 422
L180 420.185
L180.185 420
L182 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 200, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 422
L200 420.185
L200.185 420
L202 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 220, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 422
L220 420.185
L220.185 420
L222 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 240, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 422
L240 420.185
L240.185 420
L242 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 260, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 422
L260 420.185
L260.185 420
L262 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 280, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M282.2506912435501 422.48146774371565
L280 420.2295357662937
L280.2295357662937 420
L282.48146774371565 422.2506912435501
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 300, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M302.9051766186115 423.2030613215121
L300 420.2962831722399
L300.2962831722399 420
L303.2030613215121 422.9051766186115
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 320, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M323.5114765520748 423.87152872334593
L320 420.3581164069095
L320.3581164069095 420
L323.87152872334593 423.5114765520748
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 340, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M344.06040399285956 424.4767408962068
L340 420.4140985328991
L340.4140985328991 420
L344.4767408962068 424.06040399285956
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 360, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M364.541528676604 425.00719809989414
L360 420.4631658242402
L360.4631658242402 420
L365.00719809989414 424.541528676604
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 380, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M384.9435443448969 425.4504347793792
L380 420.5041652170926
L380.5041652170926 420
L385.4504347793792 424.9435443448969
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 400, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M405.25501689550157 425.7938444272343
L400 420.5359306095192
L400.5359306095192 420
L405.7938444272343 425.25501689550157
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 420, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M425.46554524121564 426.0259594721231
L420 420.55740125117137
L420.55740125117137 420
L426.0259594721231 425.46554524121564
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 440, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M445.56719359277787 426.1380304220263
L440 420.56776781403744
L440.56776781403744 420
L446.1380304220263 425.56719359277787
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 460, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M465.555835940642 426.1255082035744
L460 420.56660950883065
L460.56660950883065 420
L466.1255082035744 425.555835940642
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 480, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M485.43194338611704 425.98891222284124
L480 420.55397438061283
L480.55397438061283 420
L485.98891222284124 425.43194338611704
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 500, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M505.2004911554685 425.73372784505904
L500 420.53036982566795
L500.53036982566795 420
L505.73372784505904 425.2004911554685
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 520, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M524.8700251536324 425.36937723663993
L520 420.4966673943892
L520.4966673943892 420
L525.3693772366399 424.8700251536324
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 540, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M544.4512628200097 424.9076767585553
L540 420.45396010016634
L540.4539601001663 420
L544.9076767585553 424.4512628200097
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 560, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M563.9556930145841 424.3612932906109
L560 420.4034196293815
L560.4034196293815 420
L564.3612932906109 423.9556930145841
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 580, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M583.3944932357864 423.7425504253433
L580 420.34618591434423
L580.3461859143442 420
L583.7425504253433 423.3944932357864
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 600, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M602.7778640162736 423.0626946155167
L600 420.2832992519353
L600.2832992519353 420
L603.0626946155168 422.77786401627367
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 620, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M622.1147258090615 422.3315609802221
L620 420.21566939067054
L620.2156693906705 420
L622.3315609802221 422.11472580906144
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 640, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 422
L640 420.185
L640.185 420
L642 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 660, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 422
L660 420.185
L660.185 420
L662 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 680, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 422
L680 420.185
L680.185 420
L682 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 700, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 422
L700 420.185
L700.185 420
L702 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 720, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 422
L720 420.185
L720.185 420
L722 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 740, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 422
L740 420.185
L740.185 420
L742 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 760, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 422
L760 420.185
L760.185 420
L762 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 780, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 422
L780 420.185
L780.185 420
L782 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 800, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 422
L800 420.185
L800.185 420
L802 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 820, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 422
L820 420.185
L820.185 420
L822 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 840, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 422
L840 420.185
L840.185 420
L842 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 860, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 422
L860 420.185
L860.185 420
L862 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7009304159402259"
                          transform="translate(0, 0) rotate(0, 880, 420) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 422
L880 420.185
L880.185 420
L882 421.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8394732205735056"
                          transform="translate(0, 0) rotate(0, 0, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 442
L0 440.185
L0.185 440
L2 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 20, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 442
L20 440.185
L20.185 440
L22 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 40, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 442
L40 440.185
L40.185 440
L42 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 60, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 442
L60 440.185
L60.185 440
L62 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 80, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 442
L80 440.185
L80.185 440
L82 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 100, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 442
L100 440.185
L100.185 440
L102 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 120, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 442
L120 440.185
L120.185 440
L122 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 140, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 442
L140 440.185
L140.185 440
L142 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 160, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 442
L160 440.185
L160.185 440
L162 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 180, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 442
L180 440.185
L180.185 440
L182 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 200, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 442
L200 440.185
L200.185 440
L202 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 220, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 442
L220 440.185
L220.185 440
L222 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 240, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 442
L240 440.185
L240.185 440
L242 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 260, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 442
L260 440.185
L260.185 440
L262 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 280, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 442
L280 440.185
L280.185 440
L282 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 300, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M302.17051577544527 442.3930714172495
L300 440.2213591060956
L300.2213591060956 440
L302.3930714172495 442.17051577544527
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 320, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M322.7357578607108 443.0162710702435
L320 440.2790050739975
L320.2790050739975 440
L323.0162710702435 442.7357578607108
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 340, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M343.24350773159557 443.57608349679776
L340 440.3307877234538
L340.3307877234538 440
L343.57608349679776 443.24350773159557
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 360, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M363.6849333914179 444.06277110409917
L360 440.37580632712917
L360.37580632712917 440
L364.06277110409917 443.6849333914179
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 380, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M384.0508373912728 444.46619337516296
L380 440.4131228872026
L380.4131228872026 440
L384.46619337516296 444.0508373912728
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 400, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M404.3322751073866 444.7764885417713
L400 440.44182519011383
L400.44182519011383 440
L404.7764885417713 444.3322751073866
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 420, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M424.5213920791912 444.98499677970364
L420 440.4611122021226
L420.4611122021226 440
L424.98499677970364 444.5213920791912
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 440, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M444.61236184823025 445.0852942097357
L440 440.47038971440054
L440.47038971440054 440
L445.0852942097357 444.61236184823025
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 460, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M464.6022087026776 445.07410000295215
L460 440.46935425027306
L460.46935425027306 440
L465.07410000295215 444.6022087026776
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 480, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M484.4912706040601 444.9517867740464
L480 440.4580402765993
L480.4580402765993 440
L484.9517867740464 444.4912706040601
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 500, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M504.28314514130955 444.7223209937261
L500 440.43681469191966
L500.43681469191966 440
L504.7223209937261 444.28314514130955
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 520, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M523.9841375305871 444.3926543887399
L520 440.40632053095845
L520.4063205309584 440
L524.3926543887399 443.9841375305871
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 540, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M543.602394666937 443.97176920279713
L540 440.36738865125875
L540.3673886512587 440
L543.9717692027971 443.60239466693696
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 560, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M563.1469727296454 443.46965019806555
L560 440.3209426433211
L560.320942643321 440
L563.4696501980656 443.1469727296454
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 580, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M582.6270376448663 442.89640313656696
L580 440.26791729013246
L580.2679172901325 440
L582.896403136567 442.6270376448662
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 600, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M602.0512957152788 442.26162702897335
L600 440.20920050018003
L600.20920050018 440
L602.2616270289733 442.0512957152788
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 620, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 442
L620 440.185
L620.185 440
L622 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 640, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 442
L640 440.185
L640.185 440
L642 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 660, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 442
L660 440.185
L660.185 440
L662 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 680, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 442
L680 440.185
L680.185 440
L682 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 700, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 442
L700 440.185
L700.185 440
L702 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 720, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 442
L720 440.185
L720.185 440
L722 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 740, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 442
L740 440.185
L740.185 440
L742 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 760, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 442
L760 440.185
L760.185 440
L762 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 780, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 442
L780 440.185
L780.185 440
L782 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 800, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 442
L800 440.185
L800.185 440
L802 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 820, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 442
L820 440.185
L820.185 440
L822 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 840, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 442
L840 440.185
L840.185 440
L842 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7009304159402259"
                          transform="translate(0, 0) rotate(0, 860, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 442
L860 440.185
L860.185 440
L862 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7317652001335977"
                          transform="translate(0, 0) rotate(0, 880, 440) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 442
L880 440.185
L880.185 440
L882 441.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8123315261126698"
                          transform="translate(0, 0) rotate(0, 0, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 462
L0 460.185
L0.185 460
L2 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 20, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 462
L20 460.185
L20.185 460
L22 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 40, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 462
L40 460.185
L40.185 460
L42 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 60, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 462
L60 460.185
L60.185 460
L62 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 80, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 462
L80 460.185
L80.185 460
L82 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 100, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 462
L100 460.185
L100.185 460
L102 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 120, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 462
L120 460.185
L120.185 460
L122 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 140, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 462
L140 460.185
L140.185 460
L142 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 160, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 462
L160 460.185
L160.185 460
L162 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 180, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 462
L180 460.185
L180.185 460
L182 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 200, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 462
L200 460.185
L200.185 460
L202 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 220, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 462
L220 460.185
L220.185 460
L222 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 240, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 462
L240 460.185
L240.185 460
L242 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 260, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 462
L260 460.185
L260.185 460
L262 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 280, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 462
L280 460.185
L280.185 460
L282 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 300, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 462
L300 460.185
L300.185 460
L302 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 320, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.93329335889655 462.1315252027525
L320 460.19716608125464
L320.19716608125464 460
L322.1315252027525 461.93329335889655
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 340, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M342.40460566490253 462.6511639083821
L340 460.24523266152534
L340.24523266152534 460
L342.6511639083821 462.40460566490253
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 360, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M362.8116672083094 463.0999638459861
L360 460.2867466557537
L360.2867466557537 460
L363.0999638459861 462.8116672083094
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 380, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M383.1469727296454 463.46965019806555
L380 460.3209426433211
L380.3209426433211 460
L383.46965019806555 463.1469727296454
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 400, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M403.4034443261054 463.7524193231592
L400 460.3470987873922
L400.3470987873922 460
L403.7524193231592 463.4034443261054
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 420, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M423.5750326973385 463.9416016508693
L420 460.3645981527054
L420.3645981527054 460
L423.9416016508693 463.5750326973385
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 440, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M443.65734438864393 464.0323532399603
L440 460.3729926746963
L440.3729926746963 460
L444.0323532399603 463.65734438864393
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 460, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M463.6481650422123 464.0222326816012
L460 460.3720565230481
L460.3720565230481 460
L464.0222326816012 463.6481650422123
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 480, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M483.5477451689888 463.9115161730858
L480 460.36181524601045
L480.36181524601045 460
L483.9115161730858 463.5477451689888
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 500, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M503.3587670707733 463.7031610482616
L500 460.3425423969642
L500.3425423969642 460
L503.7031610482616 463.3587670707733
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 520, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M523.0860026196012 463.4024284670355
L520 460.3147246332008
L520.3147246332007 460
L523.4024284670355 463.0860026196012
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 540, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M542.7357578607108 463.0162710702435
L540 460.2790050739975
L540.2790050739975 460
L543.0162710702434 462.7357578607108
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 560, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M562.3152415605578 462.55263678121025
L560 460.2361189022619
L560.236118902262 460
L562.5526367812103 462.3152415605577
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 580, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.8319813257511 462.0198250559549
L580 460.18683381767585
L580.1868338176758 460
L582.0198250559549 461.8319813257511
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 600, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 462
L600 460.185
L600.185 460
L602 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 620, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 462
L620 460.185
L620.185 460
L622 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 640, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 462
L640 460.185
L640.185 460
L642 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 660, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 462
L660 460.185
L660.185 460
L662 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 680, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 462
L680 460.185
L680.185 460
L682 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 700, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 462
L700 460.185
L700.185 460
L702 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 720, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 462
L720 460.185
L720.185 460
L722 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 740, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 462
L740 460.185
L740.185 460
L742 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 760, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 462
L760 460.185
L760.185 460
L762 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 780, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 462
L780 460.185
L780.185 460
L782 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 800, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 462
L800 460.185
L800.185 460
L802 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 820, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 462
L820 460.185
L820.185 460
L822 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7009304159402259"
                          transform="translate(0, 0) rotate(0, 840, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 462
L840 460.185
L840.185 460
L842 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7317652001335977"
                          transform="translate(0, 0) rotate(0, 860, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 462
L860 460.185
L860.185 460
L862 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7619416590126529"
                          transform="translate(0, 0) rotate(0, 880, 460) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 462
L880 460.185
L880.185 460
L882 461.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7838828336529664"
                          transform="translate(0, 0) rotate(0, 0, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 482
L0 480.185
L0.185 480
L2 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 20, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 482
L20 480.185
L20.185 480
L22 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 40, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 482
L40 480.185
L40.185 480
L42 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 60, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 482
L60 480.185
L60.185 480
L62 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 80, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 482
L80 480.185
L80.185 480
L82 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 100, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 482
L100 480.185
L100.185 480
L102 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 120, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 482
L120 480.185
L120.185 480
L122 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 140, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 482
L140 480.185
L140.185 480
L142 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 160, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 482
L160 480.185
L160.185 480
L162 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 180, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 482
L180 480.185
L180.185 480
L182 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 200, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 482
L200 480.185
L200.185 480
L202 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 220, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 482
L220 480.185
L220.185 480
L222 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 240, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 482
L240 480.185
L240.185 480
L242 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 260, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 482
L260 480.185
L260.185 480
L262 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 280, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 482
L280 480.185
L280.185 480
L282 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 300, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 482
L300 480.185
L300.185 480
L302 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 320, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.814 482
L320 480.185
L320.185 480
L322 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 340, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M341.814 482
L340 480.185
L340.185 480
L342 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 360, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M361.9254689250613 482.12289848408085
L360 480.1963681097775
L360.1963681097775 480
L362.12289848408085 481.9254689250613
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 380, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M382.2346109228508 482.46373861394795
L380 480.2278958217902
L380.2278958217902 480
L382.46373861394795 482.2346109228508
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 400, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M402.4700482019074 482.723316650394
L400 480.25190679016146
L400.25190679016146 480
L402.723316650394 482.4700482019074
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 420, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M422.6270376448662 482.89640313656696
L420 480.26791729013246
L420.26791729013246 480
L422.89640313656696 482.6270376448662
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 440, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M442.7021900163115 482.9792613189763
L440 480.27558167200533
L440.27558167200533 480
L442.9792613189763 482.7021900163115
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 460, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M462.69381419116615 482.97002667162747
L460 480.27472746712556
L460.27472746712556 480
L462.97002667162747 482.69381419116615
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 480, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M482.6021009222945 482.8689095063886
L480 480.26537412934096
L480.26537412934096 480
L482.8689095063886 482.6021009222945
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 500, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M502.4291017086659 482.6781716743836
L500 480.24773087988046
L500.24773087988046 480
L502.6781716743836 482.4291017086659
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 520, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M522.1785080069554 482.4018831388704
L520 480.2221741903455
L520.2221741903455 480
L522.4018831388704 482.17850800695544
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 540, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M541.8552834901955 482.04551652722756
L540 480.18921027876854
L540.1892102787685 480
L542.0455165272276 481.8552834901954
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 560, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M561.814 482
L560 480.185
L560.185 480
L562 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 580, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.814 482
L580 480.185
L580.185 480
L582 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 600, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 482
L600 480.185
L600.185 480
L602 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 620, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 482
L620 480.185
L620.185 480
L622 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 640, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 482
L640 480.185
L640.185 480
L642 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 660, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 482
L660 480.185
L660.185 480
L662 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 680, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 482
L680 480.185
L680.185 480
L682 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 700, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 482
L700 480.185
L700.185 480
L702 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 720, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 482
L720 480.185
L720.185 480
L722 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 740, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 482
L740 480.185
L740.185 480
L742 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 760, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 482
L760 480.185
L760.185 480
L762 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 780, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 482
L780 480.185
L780.185 480
L782 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 800, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 482
L800 480.185
L800.185 480
L802 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7009304159402259"
                          transform="translate(0, 0) rotate(0, 820, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 482
L820 480.185
L820.185 480
L822 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7317652001335977"
                          transform="translate(0, 0) rotate(0, 840, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 482
L840 480.185
L840.185 480
L842 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7619416590126529"
                          transform="translate(0, 0) rotate(0, 860, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 482
L860 480.185
L860.185 480
L862 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7912168294739677"
                          transform="translate(0, 0) rotate(0, 880, 480) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 482
L880 480.185
L880.185 480
L882 481.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7543561953385207"
                          transform="translate(0, 0) rotate(0, 0, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M1.814 502
L0 500.185
L0.185 500
L2 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7239893422996584"
                          transform="translate(0, 0) rotate(0, 20, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M21.814 502
L20 500.185
L20.185 500
L22 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.693026770581628"
                          transform="translate(0, 0) rotate(0, 40, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M41.814 502
L40 500.185
L40.185 500
L42 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6617177726062057"
                          transform="translate(0, 0) rotate(0, 60, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M61.814 502
L60 500.185
L60.185 500
L62 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.630314430015697"
                          transform="translate(0, 0) rotate(0, 80, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M81.814 502
L80 500.185
L80.185 500
L82 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5990695840597742"
                          transform="translate(0, 0) rotate(0, 100, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M101.814 502
L100 500.185
L100.185 500
L102 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5682347998664024"
                          transform="translate(0, 0) rotate(0, 120, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M121.814 502
L120 500.185
L120.185 500
L122 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5380583409873473"
                          transform="translate(0, 0) rotate(0, 140, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M141.814 502
L140 500.185
L140.185 500
L142 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5087831705260324"
                          transform="translate(0, 0) rotate(0, 160, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M161.814 502
L160 500.185
L160.185 500
L162 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4806449949414908"
                          transform="translate(0, 0) rotate(0, 180, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M181.814 502
L180 500.185
L180.185 500
L182 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.45387036627855004"
                          transform="translate(0, 0) rotate(0, 200, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M201.814 502
L200 500.185
L200.185 500
L202 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4286748581039774"
                          transform="translate(0, 0) rotate(0, 220, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M221.814 502
L220 500.185
L220.185 500
L222 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.40526132983487523"
                          transform="translate(0, 0) rotate(0, 240, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M241.814 502
L240 500.185
L240.185 500
L242 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.38381829343393525"
                          transform="translate(0, 0) rotate(0, 260, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M261.814 502
L260 500.185
L260.185 500
L262 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.36451839562195604"
                          transform="translate(0, 0) rotate(0, 280, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M281.814 502
L280 500.185
L280.185 500
L282 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.34751702782796395"
                          transform="translate(0, 0) rotate(0, 300, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M301.814 502
L300 500.185
L300.185 500
L302 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.33295107506879373"
                          transform="translate(0, 0) rotate(0, 320, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M321.814 502
L320 500.185
L320.185 500
L322 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3209378138314206"
                          transform="translate(0, 0) rotate(0, 340, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M341.814 502
L340 500.185
L340.185 500
L342 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3115739678316448"
                          transform="translate(0, 0) rotate(0, 360, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M361.814 502
L360 500.185
L360.185 500
L362 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3049349292516041"
                          transform="translate(0, 0) rotate(0, 380, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M381.814 502
L380 500.185
L380.185 500
L382 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30107415172625357"
                          transform="translate(0, 0) rotate(0, 400, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M401.814 502
L400 500.185
L400.185 500
L402 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.30002271996612695"
                          transform="translate(0, 0) rotate(0, 420, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M421.814 502
L420 500.185
L420.185 500
L422 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3017890994815248"
                          transform="translate(0, 0) rotate(0, 440, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M441.814 502
L440 500.185
L440.185 500
L442 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3063590684232036"
                          transform="translate(0, 0) rotate(0, 460, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M461.814 502
L460 500.185
L460.185 500
L462 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3136958320883432"
                          transform="translate(0, 0) rotate(0, 480, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M481.814 502
L480 500.185
L480.185 500
L482 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3237403191698589"
                          transform="translate(0, 0) rotate(0, 500, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M501.814 502
L500 500.185
L500.185 500
L502 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3364116573638332"
                          transform="translate(0, 0) rotate(0, 520, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M521.814 502
L520 500.185
L520.185 500
L522 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3516078245057544"
                          transform="translate(0, 0) rotate(0, 540, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M541.814 502
L540 500.185
L540.185 500
L542 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3692064699929974"
                          transform="translate(0, 0) rotate(0, 560, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M561.814 502
L560 500.185
L560.185 500
L562 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.3890658998799348"
                          transform="translate(0, 0) rotate(0, 580, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M581.814 502
L580 500.185
L580.185 500
L582 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4110262177142727"
                          transform="translate(0, 0) rotate(0, 600, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M601.814 502
L600 500.185
L600.185 500
L602 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.4349106119292668"
                          transform="translate(0, 0) rotate(0, 620, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M621.814 502
L620 500.185
L620.185 500
L622 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.46052677942649434"
                          transform="translate(0, 0) rotate(0, 640, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M641.814 502
L640 500.185
L640.185 500
L642 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.48766847388733015"
                          transform="translate(0, 0) rotate(0, 660, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M661.814 502
L660 500.185
L660.185 500
L662 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5161171663470336"
                          transform="translate(0, 0) rotate(0, 680, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M681.814 502
L680 500.185
L680.185 500
L682 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5456438046614793"
                          transform="translate(0, 0) rotate(0, 700, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M701.814 502
L700 500.185
L700.185 500
L702 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.5760106577003417"
                          transform="translate(0, 0) rotate(0, 720, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M721.814 502
L720 500.185
L720.185 500
L722 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6069732294183721"
                          transform="translate(0, 0) rotate(0, 740, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M741.814 502
L740 500.185
L740.185 500
L742 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6382822273937944"
                          transform="translate(0, 0) rotate(0, 760, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M761.814 502
L760 500.185
L760.185 500
L762 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.6696855699843032"
                          transform="translate(0, 0) rotate(0, 780, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M781.814 502
L780 500.185
L780.185 500
L782 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7009304159402259"
                          transform="translate(0, 0) rotate(0, 800, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M801.814 502
L800 500.185
L800.185 500
L802 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7317652001335977"
                          transform="translate(0, 0) rotate(0, 820, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M821.814 502
L820 500.185
L820.185 500
L822 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7619416590126529"
                          transform="translate(0, 0) rotate(0, 840, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M841.814 502
L840 500.185
L840.185 500
L842 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.7912168294739677"
                          transform="translate(0, 0) rotate(0, 860, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M861.814 502
L860 500.185
L860.185 500
L862 501.814
Z"></path>
                    <path fill="#ffffff" opacity="0.8193550050585092"
                          transform="translate(0, 0) rotate(0, 880, 500) scale(1)"
                          fill-rule="evenodd" clip-rule="evenodd" d="M881.814 502
L880 500.185
L880.185 500
L882 501.814
Z"></path>
                </g>
            </svg>
        </div>
    )
}

export default DesktopBackground