import Head from "next/head";
import Navbar from "../components/navbar";
import TopFooter from "../components/topfooter";
import FAQSection from "../components/FAQSection";
import {
  Box,
  Button,
  HStack,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import tick from "../assets/tick.png";
import { useState } from "react";
import axios from 'axios'

export default function ConsumerCode() {
  // Define your FAQ questions and answers here

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: null,
    pincode: "",
    state: "",
  });
  const updateData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const queryData = {
      mailSubject: "Query",
      mailBody:
        userData.name +
        "\n" +
        userData.email +
        "\n" +
        userData.phone +
        "\n" +
        userData.pincode +
        "\n" +
        userData.state,
    };

    await axios.post('/route/submitQuery', queryData).then((response) => {
      if (response.data && response.status == 200) {
        window.location.href = "/thanks";
        toast({
          title: response.data,
          description: "We will get back to you soon",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    }).catch(error => { console.log(error) })
  };
  return (

    <div>

      <div className="bg-gradient-to-r from-[#A6C1EE]/20 to-[#FBC2EB]/30">
        <Navbar />
        <div className="w-full items-center flex flex-col mt-[5vh]">
          <p className="text-4xl font-extrabold ">New Energy Tech Consumer Code</p>
          <p className="py-[1vh]">
            Resources /{" "}
            <span className="text-orange-500">Consumer Code</span>{" "}
          </p>
        </div>
      </div>

      <Head>
        <title>Make My Energy</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <div>
          <div className=" from-[#A6C1EE]/20 to-[#FBC2EB]/30">
          </div>
          <div
            className="bg-white p-8"
            style={{ backgroundImage: "url(/1.png)", backgroundSize: "cover" }}
          >
            <div>
              <h2 className="text-xl font-bold mb-4">Scope</h2>
              <p className="text-lg mb-6">
                This New Energy Tech Consumer Code (“the Code”) sets good practice standards for providing Residential and Small Business Customers with New Energy Tech products, systems and services. We may extend these protections to other customers if we expressly include this in the contract. New Energy Tech is defined in Part C of the Code to include such things as solar photovoltaic systems, wind turbines, energy storage systems, managing a customer’s energy usage and electric vehicle charging services but does not include some simple, low cost, standard New Energy Tech.
              </p>
              <p className="text-lg mb-6">The intention of this Code is to raise standards of consumer protection in the sector, to strengthen consumer confidence in New Energy Tech and to encourage innovation and the development of choice for consumers.</p>
              <p className="text-lg mb-6">Providers who have been accepted by the Administrator as Code Signatories (referred to as “we” and “our”) are bound to comply with this Code. Customers protected by this Code are referred to as “you” and “your”.</p>
              <h2 className="text-xl font-bold mb-4">
                The Code includes:
              </h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  Part A that provides an overview of the key commitments we make to you
                </li>
                <li className="text-lg mb-4">
                  Part B that sets out our required practices in detail
                </li>
                <li className="text-lg mb-4">
                  Part C that defines key terms (which are Capitalised in the Code) and
                </li>
                <li className="text-lg">
                  an Annexure setting out how the Code is administered, monitored and enforced, including our obligations to the Administrator and the Code Monitoring and Compliance Panel (“The Panel”).
                </li>
              </ul>

              <p className="text-lg mb-6">The Code operates alongside a range of existing legal and regulatory protections. Generally, it does not repeat these protections except as needed to provide you with a complete understanding of what to expect from us.</p>
              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Key Commitments</h2>
              <ol>
                <li>The key commitments made under this Code are to:</li>
              </ol>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  Provide you with clear, accurate and relevant information to help you make informed choices
                </li>
                <li className="text-lg mb-4">
                  Encourage you to be aware of your rights under the law and the Code
                </li>
                <li className="text-lg mb-4">
                  Ensure that our sales practices are responsible
                </li>
                <li className="text-lg mb-4">
                  Ensure that products, systems, services and documentation provided under the Code are suitable and fit for purpose
                </li>
                <li className="text-lg mb-4">
                  Support staff training and work processes that ensure that we comply with the law and the Code
                </li>
                <li className="text-lg mb-4">
                  Ensure that we will be responsive to your needs and take prompt, appropriate action if you make a complaint
                </li>
              </ul>
              <h2 className="text-xl font-bold mb-4">The Code aims to cover the main steps of your ‘customer journey’ as illustrated below.</h2>
              <p className="font-bold">Advertising & Promotion</p>
              <p>We will be honest, accurate, clear and fair.</p>
              <p className="font-bold">Direct marketing & sales</p>
              <p>We will identify ourselves, provide unbiased information and use no pressure-selling. We will take extra care throughout if we become aware that you may be vulnerable.</p>
              <p className="font-bold">Fit for purpose</p>
              <p>Our aim is to ensure that our offers are fit for purpose. Where we are to configure or install on your site, we will ask about your needs and ensure that our offer is fit for that purpose.</p>
              <p className="font-bold">Quoting</p>
              <p>Our quotes will provide comprehensive details of our offer, including expected performance and any limitations, an itemized list of inclusions, installation times, a breakdown of costs, any relevant warnings and your rights and obligations.</p>
              <p className="font-bold">Contracts</p>
              <p>If you agree to go ahead with an offer involving a contract, our written contract will address all aspects of the quote, including any variance from the original quote, applicable warranties and any issues that you should particularly note.</p>
              <p className="font-bold">Payment & finance</p>
              <p>We will provide clear and complete information about your payment options.</p>
              <p className="font-bold">Delivery, installation & safety</p>
              <p>We will deliver and install in the timeframe promised and in accordance with all safety regulations, manufacturers’ specifications and Australian Standards.</p>
              <p className="font-bold">Activation</p>
              <p>We will assist you with any necessary activation steps to begin delivering your benefits, including with any necessary approvals and connection to an energy network.</p>
              <p className="font-bold">User information</p>
              <p>We will provide you with information for safe, effective and optimum use of your service or purchase including any of your obligations.</p>
              <p className="font-bold">Customer service</p>
              <p>We will have fair terms and maintain high standards of communication and support. We will ensure that we respond courteously and act promptly to any contact or reasonable requests from you.ill assist you with any necessary activation steps to begin delivering your benefits, including with any necessary approvals and connection to an energy network.</p>
              <p className="font-bold">Warranty</p>
              <p>We will honour all guarantees and warranties you may be entitled to and we will promptly fix service issues, and make repairs or replacements.</p>
              <p className="font-bold">Complaints</p>
              <p>We will respond promptly and fairly if you have a complaint with our service or your purchase. We will keep you informed as to progress and if you are not satisfied with our response, refer you to independent complaints bodies.</p>
              <p className="font-bold">Compliance</p>
              <p>We will comply with this Code and with all relevant laws, regulations and standards including Privacy laws.</p>
              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Our required practices</h2>
              <h2 className="text-xl font-bold mb-4">Advertising and promotion</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  We will ensure that we have adequate systems, policies and processes in place to ensure fair marketing and appropriate sales outcomes for consumers
                </li>
                <li className="text-lg mb-4">
                  Our advertisements and other promotional material will not include any false or misleading claims about us or our New Energy Tech. In particular, our advertisements and promotional material will:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">ensure all relevant incentive schemes (government and non-government) are honestly and accurately represented</li>
                    <li className="text-lg mb-4">not misrepresent our association with government or falsely claim to be part of a government scheme</li>
                    <li className="text-lg mb-4">not make any false or misleading claims about the price, value, quality, capacity, output or other performance characteristic of our New Energy Tech, for example, through selective advertising, exaggeration or misleading focus on one or a few aspects only of the New Energy Tech</li>
                    <li className="text-lg mb-4">use language that is accessible and that avoids industry jargon</li>
                    <li className="text-lg mb-4">not make any misleading claims about the place of origin (manufacture and assembly) of our products</li>
                    <li className="text-lg mb-4">not mislead you about the impact our New Energy Tech will have on your energy usage or costs</li>
                    <li className="text-lg mb-4">ensure that any claims relating to performance and energy cost savings of our New Energy Tech are reasonably based and where available, based on reputable sources</li>
                    <li className="text-lg mb-4">advertise the total price for our New Energy Tech as prominently as we advertise any component of the price</li>
                    <li className="text-lg mb-4">provide information that is specific to the state or region in which the promotional activity takes place</li>
                    <li className="text-lg mb-4">ensure that any disclaimers are clearly outlined and not buried in small print</li>
                    <li className="text-lg mb-4">only include a statement, promise, prediction or opinion if it is reasonably based</li>
                    <li className="text-lg mb-4">not include information that is no longer current, for example, quote an offer or financial incentive that is no longer available</li>
                    <li className="text-lg mb-4">be clear about any additional cost for finance or an alternative purchasing arrangement for New Energy Tech when the cost is being recovered in the overall price (e.g. where the price of financed New Energy Tech is greater than the price that would apply if immediate payment is made).</li>
                  </ul>
                </li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Direct marketing and sales</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  When marketing directly to you, including through a sales agent (as well as meeting the requirements in paragraph 3):
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">	we will explain up-front the purpose of any un-requested (“unsolicited”) contact by us, in person or by telephone and advise that you can ask us to leave or end the contact at any time</li>
                    <li className="text-lg mb-4">	we will leave your premises or end the contact immediately if you ask us to do so</li>
                    <li className="text-lg mb-4">	we will show you our company-issued identification if an unsolicited contact is in person</li>
                    <li className="text-lg mb-4">	any interactive internet marketing channel that we use will clearly identify for you the company whose New Energy Tech is being promoted</li>
                    <li className="text-lg mb-4">	we will provide you with the address of our local office or showroom, an email or other electronic address and a telephone number where any queries can be answered</li>
                    <li className="text-lg mb-4">we will provide you with the Administrator approved Consumer Information Product that explains the consumer protection framework that applies under legislation and this Code and sets out other key information. The information may be provided to you in electronic format, however if you request, we will provide you the information in hard copy.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">	We will adhere to responsible marketing practices at all times and avoid high-pressure sales tactics that may induce you to make hasty or uninformed decisions about the New Energy Tech you are considering. High-pressure sales tactics include (for example):
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">	seeking to sell to you if you are unlikely to be able to understand our information and/or our contract (e.g. due to English language difficulties, age, learning difficulties, mental illness or physical disability)</li>
                    <li className="text-lg mb-4">offering discounts for agreeing to provide testimonials and/or referrals</li>
                    <li className="text-lg mb-4">claiming special discounts (eg. “community” or bulk-buy discounts) apply, if they don’t</li>
                    <li className="text-lg mb-4">applying psychological pressure to persuade you to make a quick purchase decision (eg. by unfairly appealing to your emotions)</li>
                    <li className="text-lg mb-4">employing badgering techniques, such as revisiting your premises uninvited or making frequent telephone calls, to pressure you into signing a contract</li>
                    <li className="text-lg mb-4">other conduct that the Administrator may reasonably identify as high-pressure sales tactics.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">6.	Throughout our dealings with you, we will take extra care if we become aware that you may be facing vulnerable circumstances (eg. illness, impairment, a victim of abuse, financial stress).</li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Fit for purpose inquiry</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">As appropriate to the nature, complexity and cost of the new Energy Tech you are considering, we will support you in making a fit-for-purpose choice including:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">
                      ask you about your specific circumstances, needs and expectations. This includes the extent to which you plan to
                      use our New Energy Tech to supplement or improve the efficiency of energy use while connected to an Energy Network or be isolated from the Energy Network (also known as “off-grid”) or your expected outcomes from participating in forms of New Energy Tech supply such as virtual power plants or other energy markets.

                    </li>
                    <li className="text-lg mb-4">
                      enquiring about any need you may have for energy for medical or life-support equipment or services and ensure that our New Energy Tech is suitable for this purpose and that you are made aware of any additional or increased risks.
                    </li>
                    <li className="text-lg mb-4">
                      ensuring that any offer of New Energy Tech is fit for purpose in light of your circumstances, needs and expectations as you have described them to us (unless we clearly explain to you orally and in writing that it is not fit for that purpose). We will include a brief description of your circumstances, needs and expectations in our quotes and contracts. Where we offer you a New Energy Tech that is intended to work in conjunction with other New Energy Tech that you already have or are obtaining, we will ensure that our offer is compatible with that other New Energy Tech and confirm this in writing in your quote and contract.
                    </li>
                  </ul>
                </li>
                <li className="text-lg mb-4">If you advise us that you are considering operating off the Energy Network, we will provide you with a copy of the Administrator-approved Consumer Information Product that sets out Energy Networks Australia’s Off-Grid Principles</li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Quote – general requirements</h2>

              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">We will provide you with a written quote that sets out:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">our full name, Australian Business Number (if relevant) and physical address, an email or other electronic address and a telephone number where any queries can be answered</li>
                    <li className="text-lg mb-4">an itemised list of the New Energy Tech to be supplied,
                      including relevant specifications. For products and systems, this will include the manufacturer, model, year, quantities, configuration and performance specifications. For services, this will include the nature and purpose of the services, whether the services are ongoing, scheduled (and if so what frequency) or responsive to your request, the duration of the service commitment and whether the services will be provided remotely or at your premises</li>
                    <li className="text-lg mb-4">information about how the New Energy Tech operates</li>
                    <li className="text-lg mb-4">information about any responsibilities you have to facilitate the operation of the New Energy Tech including maintenance and access issues</li>
                    <li className="text-lg mb-4">information about product, system or service limitations that are likely to be relevant to you (eg. where a battery does not provide a back-up facility)</li>
                    <li className="text-lg mb-4">a performance estimate for the New Energy Tech to be supplied, which will be reasonably based, where available rely on reputable sources and comply with any relevant Administrator guidance</li>
                    <li className="text-lg mb-4">where our offer is for a New Energy Tech product or system to be connected to the Energy Network, information that your energy supply contract may change as a consequence of purchasing the New Energy Tech and that it is your responsibility to contact your Energy Supplier to find out about this and whether there are any restrictions to your ability to interact with the Energy Network</li>
                    <li className="text-lg mb-4">our timeframe for supplying and installing products and systems or commencing services to be provided to you (if there are circumstances that are out of our control that may cause delay, we will identify this)</li>
                    <li className="text-lg mb-4">our business terms including the method of making payments</li>
                    <li className="text-lg mb-4">details of any guarantees and warranties that apply. We will specify:
                      <ul className="list-disc pl-6">
                        <li className="text-lg mb-4">that your rights under your contractual warranty are in addition to the consumer guarantees under the Australian Consumer Law and that these are not excluded or replaced by your contract</li>
                        <li className="text-lg mb-4">the specific details of the guarantee or warranty and how it applies to you</li>
                        <li className="text-lg mb-4">for a New Energy Tech product or system - the name and contact details of our supplier in case you want to pursue your consumer guarantee rights under the Australian Consumer Law against that supplier or if for any reason you are unable to contact us</li>
                      </ul>
                    </li>
                    <li className="text-lg mb-4">for a New Energy Tech product or system, information about its expected life and what is involved in disposing of it at the end of its life</li>
                    <li className="text-lg mb-4">information about the portability of the proposed New Energy Tech</li>
                    <li className="text-lg mb-4">information about the term of any applicable ongoing agreement and any provisions that may impact on your existing relationship with an Energy Supplier</li>
                    <li className="text-lg mb-4">if the quote is for an installation on a strata title property and requires the approval of the Owners Corporation – the need for you to obtain that written approval and provide it to us before you sign the contract with us</li>
                    <li className="text-lg mb-4">conspicuously and prominently on the front page of the quote, your cooling-off and termination rights (if applicable) under the Australian Consumer Law (including the right to terminate a sales agreement within 10 business days if the sale resulted from an unsolicited contact) and this Code</li>
                    <li className="text-lg mb-4">any licenses, accreditation or certification that we hold that are needed to fulfil the offer we are making to you</li>
                    <li className="text-lg mb-4">that we are bound by this Code</li>
                    <li className="text-lg mb-4">the Administrator-approved Consumer Information Product that explains the benefits of the Code for our Customers and any other important information as applicable.</li>
                  </ul>
                </li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Quote – financial disclosure</h2>
              <ul className="list-disc pl-6">

                <li className="text-lg mb-4">Our quote to you will specify the deposit payable (if any) and the total price of all offered New Energy Tech including any taxes that apply. We will specify the period of time our pricing is valid for (which will be at least 10 business days).</li>
                <li className="text-lg mb-4">Where our offer is of a Power Purchase Agreement, our quote will specify:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">	the energy pricing and all associated fees and charges, any rights we have to change any of these and the notice we will provide of any price change</li>
                    <li className="text-lg mb-4">a reasonable estimate of the aggregate amount payable over the agreement’s term based on a stated, reasonable estimate of your energy consumption, including the basis of the calculation and, if applicable, the energy you will export to the Energy Network</li>
                    <li className="text-lg mb-4">a clear statement that you must pay the stated energy prices for the term of the contract and that this amount may not reflect or be competitive with available prices for energy from the Energy Network.</li>
                  </ul>
                  <li className="text-lg mb-4">12.	Our quote to you will specify site conditions and circumstances beyond our control that may result in extra chargeable work not covered by the quote (eg. fees for meter exchange/re-configuration, repairs to existing faults, and changing dedicated off-peak control devices if required).</li>
                  <li className="text-lg mb-4">13.	Our quote to you will specify the total value of any discounts, regulatory certificates, incentives or rebates (government and non-government) or government relief schemes and how and when these may or may not apply.</li>
                  <li className="text-lg mb-4">14.	Where we offer New Energy Tech services and periodic or intermittent charges apply, our quote will specify the amount or method of calculation, any rights we have to vary charges during the term of the contract and the frequency of bills. For example, if there will be charges for software upgrades, we will aim to provide reasonable certainty as to the cost that you will incur.</li>
                  <li className="text-lg mb-4">15.	If we make a claim that you are likely to achieve a favourable return on your investment, we will include in our quote a return on investment calculation that is based on reasonable assumptions and where available from reputable sources. Our quote will set out our assumptions including:
                    <ul className="list-disc pl-6">
                      <li className="text-lg mb-4">a.	system design, performance and output</li>
                      <li className="text-lg mb-4">b.	government and non-government financial incentives</li>
                      <li className="text-lg mb-4">c.	energy prices and usage</li>
                      <li className="text-lg mb-4">d.	financing costs (if applicable)</li>
                      <li className="text-lg mb-4">e.	maintenance costs</li>
                      <li className="text-lg mb-4">f.	end-of-life costs</li>
                      <li className="text-lg mb-4">g.	any other relevant factors.</li>
                      <p>We will also clearly state that our calculation is an estimate only and that if our assumptions prove not to be correct you may not achieve the estimated return.</p>
                    </ul>
                  </li>
                  <li className="text-lg mb-4">If our offer involves us making payments to you (for example, for energy purchased from you), we will clearly specify how payments will be determined, any rights that we have to change the basis on which payments will be calculated and the frequency with which payments will be made.</li></li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Quote – design</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">17.	If the quote includes New Energy Tech that requires custom configuration or specification and/or physical installation by us or a competent or qualified installer:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">we will include as part of the quote:
                      <p>i.	a site-specific installation design or plan (a sketch or diagram is acceptable) including any configuration or positioning issues and how the New Energy Tech will integrate with other New Energy Tech you may have</p>
                      <p>ii.	a site-specific performance estimate for the New Energy Tech.</p>
                    </li>
                    <li className="text-lg mb-4">before we enter into a contract to provide New Energy Tech to you, we will complete a site-specific installation design or plan and site-specific performance estimate (both must meet the requirements of paragraph 17a) for a non-refundable agreed fee, with no obligation on you to proceed to contract with us</li>
                    <li className="text-lg mb-4">we can provide a site-specific installation design or plan and site-specific performance estimate (both of which will meet the requirements of paragraph 17a) as an initial deliverable of the contract if:
                      <ul className="list-disc pl-6">
                        <li className="text-lg mb-4">i.	we do so before the expiry of your cooling-off period (if applicable)</li>
                        <li className="text-lg mb-4">ii.	we provide you with a full refund, if within 10 business days of receiving the site-specific installation design or plan and performance estimate you notify us that you do not accept these</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Quote - connections</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  If our quote is for a New Energy Tech that requires approval from your Energy Supplier for connection to the Energy Network and/ or reconfiguration of your meter, we will also include in our quote:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">an offer to arrange this on your behalf and what, if any, charge we will make for doing this</li>
                    <li className="text-lg mb-4">	an explanation of the steps that need to be taken to obtain approval and/ or reconfiguration of your meter and the relevant paperwork that must be completed and submitted prior to installation</li>
                    <li className="text-lg mb-4">a statement that your Energy Supplier may impose a charge for connection to the Energy Network and/or reconfiguring your meter and may change your existing energy pricing</li>
                    <li className="text-lg mb-4">d.	a statement that we will support you through these steps if you decide to obtain Energy Network connection approval yourself and whether there will be any non- refundable charge for this assistance.</li>
                  </ul>
                </li>
              </ul>


              <h2 className="text-xl font-bold mb-4">Contracts</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4"> 19.	If you accept our quote and agree to purchase our New Energy Tech, we will provide you with a written contract that is clear, uses plain language and is in legible print.</li>
                <li className="text-lg mb-4">
                  20.	Your contract will meet the same requirements as for a quote (and may do this by attaching the quote with any amendments that are necessary). In addition:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	your contract will include our undertaking to you to comply with the Code</li>
                    <li className="text-lg mb-4">	b.	your contract will provide you with a standard minimum supplier’s warranty period on the operation and performance of the New Energy Tech including workmanship. The period will meet or exceed the period set from time to time by the Administrator, in consultation with stakeholders, for the particular New Energy Tech</li>
                    <li className="text-lg mb-4">c.	your contract will include information about how to make a complaint and the complaint resolution process including your right to access an external dispute resolution scheme (where applicable), to take a complaint to the Administrator and to take a complaint to a government regulator and</li>
                    <li className="text-lg mb-4">d.	at the time we provide your contract to you, we will also provide you with any relevant Administrator-approved Consumer Information Product. We may give these to you electronically, but if requested, we will provide them in hard copy</li>
                    <li className="text-lg mb-4">e.	if your contract is an unsolicited consumer agreement under the Australian Consumer Law, the front page of your contract will conspicuously and prominently inform you about your cooling-off rights (including the right to terminate the contract within 10 business days) and the manner in which those rights can be exercised.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">21.	We will not offer you a contract that involves requiring you to purchase energy or services from another supplier (called “third line forcing”), except where this is permitted by the Competition and Consumer Act 2010 (Cth) and we have made this clear to you.</li>
                <li className="text-lg mb-4">
                  We will explain the contract to you prior to you entering into the agreement. In particular:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	we will draw your attention to any particular requirements of the contract that may cause confusion or disagreement (e.g. where additional fees may arise, earlytermination fees, end of contract payments or any difference between a verbal quote and the final price)</li>
                    <li className="text-lg mb-4">	b.	we will clearly explain the process for the payment and trade of any government or regulatory certificates, and of any relevant trading facility and any limitations</li>
                    <li className="text-lg mb-4">c.	we will advise you that your Energy Supply contract may change as a result of purchasing the New Energy Tech and that it is your responsibility to contact your Energy Supplier to check what new pricing may be applied and, after installation of the New Energy Tech, to confirm that the agreed pricing has been applied.</li>

                  </ul>

                </li>
                <li className="text-lg mb-4">23.	Both of us will sign the contract and any amendments. Equivalent methods of legal agreement other than physically signing a written contract in person are also permitted (for example, electronic acceptance).</li>
              </ul>
              {/* * */}

              <h2 className="text-xl font-bold mb-4">Payment and finance</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4"> 24.	We will issue you with a receipt for any deposit or other payment you make under the contract.</li>

                <li className="text-lg mb-4">
                  25.	We may offer you New Energy Tech with a deferred payment arrangement as an alternative to upfront payment upon delivery or installation. If you are a Residential Customer, we will ensure that:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	the deferred payment arrangement is offered through a credit provider (whether ourselves or a third party) that:
                      <p>i.	is licensed under the National Consumer Credit Protection Act (2009) (Cth) ("NCCPA") and the deferred payment arrangement is regulated by the NCCPA and the National Credit Code ("NCC"), or</p>
                      <p>ii.	has had its deferred payment contract and its internal policies and procedures approved by the Administrator in accordance with paragraph A7 of the Annexure – Code Administration</p>
                    </li>
                    <li className="text-lg mb-4">b.	the term of the deferred payment contract or lease is no longer than the expected life of the product or system</li>
                    <li className="text-lg mb-4">c.	you receive the following clear and accurate information:
                      <ul className="list-disc pl-6">
                        <li className="text-lg mb-4">i.	the name of the credit provider to whom you will be contracted for the arrangement</li>
                        <li className="text-lg mb-4">ii.	a clear statement that the deferred payment arrangement is a voluntary finance option</li>
                        <li className="text-lg mb-4">iii.	the proposed total cost under the deferred payment arrangement compared with the cost of that same New Energy Tech product, system or service if you were to purchase it outright on that day</li>
                        <li className="text-lg mb-4">iv.	the disclosures required under the NCC, including in relation to fees and charges (regardless of whether the arrangement is regulated under the NCC)</li>
                        <li className="text-lg mb-4">v.	whether at the conclusion of the deferred payment arrangement
                          <ul className="list-disc pl-6">
                            <li className="text-lg mb-4">•	you own any elements of the New Energy Tech, or</li>
                            <li className="text-lg mb-4">•	you have any entitlement to any ongoing services or pricing, and/or

                            </li>
                            <li className="text-lg mb-4">•	you have the option to purchase any elements of the new Energy Tech and if so relevant details, including any associated costs, and</li>
                          </ul>
                          <li className="text-lg mb-4">	a statement that questions and complaints about the deferred payment arrangement should be directed to the credit provider with whom you will be contracted.</li>
                        </li>
                      </ul>
                    </li>

                  </ul>
                </li>
                <li className="text-lg mb-4">26.	Paragraph 25 does not apply if the finance is provided by a government body.</li>
                <li className="text-lg mb-4">27.	Paragraph 25 does not apply if we offer you, as an alternative to full payment on delivery or installation, the opportunity to make progressive instalments to us over a period of not more than 6 months, provided that the total amount to be paid by you does not include an interest component, additional fees or an increased price (see paragraph 3. m.).</li>
                <li className="text-lg mb-4">28.	Paragraph 25 does not apply if the Administrator is satisfied that the contract we offer you is a Power Purchase Agreement and our contract includes a commitment to try and assist you if you notify us that you are experiencing financial hardship, including by advising you of any relevant government assistance schemes and by offering you a payment plan.</li>
                <li className="text-lg mb-4">29.	Where we are providing an ongoing service to you and the contract allows us to change the price that we charge you, we will advise you as soon as practical and no later than five business days prior to the price change taking effect.</li>
                <li className="text-lg mb-4">30.	If your contract requires us to make payments to you (whether by transfer of money or by offset to a payment you make to us), we will make those payments on time in accordance with your contract. If our payments to you are calculated using an undisclosed formula, we will ensure that our payment calculation system is regularly audited by a registered company auditor to ensure that payments are accurately
                  calculated.
                </li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Delivery, installation and safety</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  31.	We will arrange delivery and installation (if applicable) of New Energy Tech you purchase from us within the timeframe specifiedin your contract, unless any delay is because of circumstances that were identified in your contract as outside our control.</li>
                <li className="text-lg mb-4">32.	If you purchase New Energy Tech that requires physical installation by us, we will ensure your safety and the safety of our installers. We will install in accordance with all applicable safety standards, manufacturer’s specifications, relevant Australian Standards, Energy Network standards and good industry practice, using an installer that is trained, competent and where applicable, holds any required qualification or certification to undertake the work.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Activation</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                  33.	If you authorise us to obtain Energy Network connection approval on your behalf for New Energy Tech, we will:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	not install or commence the New Energy Tech until approval is provided</li>
                    <li className="text-lg mb-4">b.	provide you with a full refund if the relevant approvals are not obtained</li>
                    <li className="text-lg mb-4">c.	prepare and submit within a reasonable timeframe all relevant documentation required by the Energy Supplier for connection to the Energy Network and for reconfiguration of your meter (if relevant)</li>
                    <li className="text-lg mb-4">d.	respond within a reasonable timeframe to any additional compliance requests from the Energy Supplier (for example, re-submitting incorrect paperwork), and consult with you if necessary</li>
                    <li className="text-lg mb-4">e.	keep you informed of progress at each step, including any restrictions or limitations that may adversely affect you.</li>
                  </ul>
                  <li className="text-lg mb-4">
                    34.	If you take responsibility for obtaining Energy Network connection approval for New Energy Tech, we supply to you, we will:
                    <ul className="list-disc pl-6">
                      <li className="text-lg mb-4">a.	clearly explain to you each step in the process for preparing and submitting the documentation to the Energy Supplier</li>
                      <li className="text-lg mb-4">b.	provide you with information as to where to find and how to complete and submit paper or on-line forms</li>
                      <li className="text-lg mb-4">c.	provide you with expected timeframes and any deadlines for each step of the process</li>
                      <li className="text-lg mb-4">d.	advise you of contact details for queries or following up on progress</li>
                      <li className="text-lg mb-4">e.	advise of any potential problems that may arise</li>
                      <li className="text-lg mb-4">f.	provide you with a refund consistent with paragraph 48 if your application is rejected.</li>
                    </ul>
                  </li>
                </li>
                <li className="text-lg mb-4">35.	If you take responsibility for obtaining Energy Network connection approval for New Energy Tech and your application is rejected after you have signed a contract for that New Energy Tech, we will provide you with a refund minus reasonable expenses incurred by us to the point of termination of the contract.</li>
                <li className="text-lg mb-4">36.	If we supply you with New Energy Tech that needs another form of activation in order to provide you with the intended benefit, we will explain to you the steps that need to be taken and who is responsible for these. We will promptly fulfil our responsibilities and keep you informed of progress at each step.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Operating Information</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">37.	Prior to the activation of the New Energy Tech we are providing you, we will:
                  <ul>
                    <li className="text-lg mb-4">a.	provide you with comprehensive information for safe and effective operation, maintenance and optimisation of your New Energy Tech</li>
                    <li className="text-lg mb-4">b.	explain to you any obligations that you may have to facilitate or enable the New Energy Tech (for example, to maintain an internet connection that we are able to access)</li>
                    <li className="text-lg mb-4">c.	advise you how to use your New Energy Tech and/or assess the benefit you are deriving from these. The advice will be appropriate to the New Energy Tech we are providing to you and will involve at least one of the following:
                      <ul className="list-disc pl-6">
                        <li className="text-lg mb-4">i.	written instructions and a physical or electronically recorded demonstration (for example, an instructional video)</li>
                        <li className="text-lg mb-4">ii.	providing you either with a measuring or monitoring device that connects to the New Energy Tech or with continuous access to a remote monitoring service (in either case that will facilitate accurate measurement of benefit that is based on objective standards acceptable to the Administrator) together with written instructions as to how to use that device or access that service</li>
                        <li className="text-lg mb-4">iii.	a commitment to provide you with regular reports that accurately quantify the benefit that you are deriving and that meet any guidelines made by the Administrator in relation to reporting of this kind (for example, in the case of a service that is designed to reduce your energy bills by smart management of your energy consuming products).</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <p>The required information will vary depending on the specifics of the New Energy Tech but will meet the Administrator’s requirements. The information may be provided to you in electronic format, hard copy or by web link or something similar. If you request, we will provide you the information in hard copy (in which case, we will provide it at least quarterly, namely every three months).</p>
              </ul>

              <h2 className="text-xl font-bold mb-4">Performance</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">38.	Our New Energy Tech will meet your reasonable expectations including but not limited to:
                  <ul>
                    <li className="text-lg mb-4">a.	meeting your needs as explained to us (see paragraph 7), unless we have clearly explained to you and confirmed in writing that those needs cannot be met</li>
                    <li className="text-lg mb-4">b.	performing properly</li>
                    <li className="text-lg mb-4">c.	reflecting any agreed contract and meeting the performance specifications outlined by us to you;</li>
                    <li className="text-lg mb-4">d.	fulfilling any commitments we make to you (for example, to provide access to an accurate monitoring service or regular reports that accurately quantify the benefit you are gaining)</li>
                    <li className="text-lg mb-4">e.	New Energy Tech that utilises information and communications technology will be secure</li>
                    <li className="text-lg mb-4">f.	all our services will be provided with due care and skill.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">39.	If we become aware that New Energy Tech that we have supplied to you is defective or unsafe, we will promptly tell you and offer to fix the problem if this is possible or otherwise remove the product or system from your premises and provide reasonable compensation to you.</li>
                <li className="text-lg mb-4">40.	If we provide you with New Energy Tech that involves the use of equipment that you own, we will do so in a way that is consistent with the equipment manufacturer’s instructions and warranty requirements.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Move from premises</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">41.	If our contract with you includes a lock-in period and imposes fees if you terminate early, and
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	the services are not transferrable to another property</li>
                    <li className="text-lg mb-4">b.	you sell or move from the property to which those services are being provided</li>
                    <li className="text-lg mb-4">c.	the occupier of the property agrees to take over your contract</li>
                  </ul>
                </li>
                <p>we will agree to the occupier of the property substituting for you under the contract and will not charge you early termination fees, unless we have a reasonable basis for refusing to contract with the occupier of your property.</p>
              </ul>

              <h2 className="text-xl font-bold mb-4">Warranty claim</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">42.	We will respond promptly to any warranty claim by you and within a reasonable timeframe implement warranty repairs and replacements, remedy service issues or provide compensation.</li>
                <li className="text-lg mb-4">43.	We will provide you with the name and contact details of our New Energy Tech product or system supplier in case you want to pursue your consumer guarantee rights under the Australian Consumer
                  Law against that supplier or if for any reason, you are unable to contact us.
                </li>
                <li className="text-lg mb-4">44.	In some circumstances, you may not be entitled to a consumer guarantee under Australian Consumer Law, and in that case, you may not be entitled to a remedy, if the claim is due to something that:</li>
                <li className="text-lg mb-4">someone else said or did (excluding our agents or employees) or

                  beyond human control that happened after the goods or services were supplied (for example, an extreme weather event).
                </li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Termination of contract</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">45.	You are entitled to terminate your contract and we will provide you with a full refund if:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	your contract is for the supply of New Energy Tech that requires physical installation</li>
                    <li className="text-lg mb-4">b.	consistent with paragraph 17.b, we provide you with a site-specific installation design or plan and site-specific performance estimate as an initial deliverable under the contract (rather than as part of our quote)</li>
                    <li className="text-lg mb-4">c.	within 10 business days of receiving our site-specific installation design plan and performance estimate you notify us that you do not accept these.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">46.	You are also entitled to terminate your contract and we will provide you with a full refund, if your contract is for the supply of New Energy Tech that requires physical installation and either of the following applies
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	we propose to significantly change the New Energy Tech installation design from that previously provided to you (whether provided in our quote or as a first deliverable under your contract) and you are not willing to accept the change or</li>
                    <li className="text-lg mb-4">b.	site conditions and circumstances beyond our control result in extra chargeable work not within the contract price and we are not willing to bear those additional costs.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">47.	You are also entitled to terminate your contract for the supply of New Energy Tech, and we will provide you with a full refund, if we fail to meet the timeframe specified in your contract for delivery and installation (if applicable), or commencement of service of any New Energy Tech. This does not apply, however, if the delay was because of circumstances that were identified in your contract as outside our control.</li>
                <li className="text-lg mb-4">48.	If you take responsibility for obtaining Energy Network connection approvals and your application is rejected after you have signed a contract with us (see paragraph 35), you may terminate the contract and we will provide you with a refund minus reasonable expenses incurred by us up to the time of the termination.</li>
                <li className="text-lg mb-4">49.	We will terminate your contract and remove New Energy Tech that we supplied to you and return the site to its former state, if:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	you have a strata title property</li>
                    <li className="text-lg mb-4">b.	you were required by law to obtain the Owners Corporation written consent before installing our New Energy Tech</li>
                    <li className="text-lg mb-4">c.	you entered into a contract with us to supply the New Energy Tech before obtaining that written consent and</li>
                    <li className="text-lg mb-4">d.	the Owners Corporation subsequently refuses to give that consent.</li>
                    <p className="text-lg mb-4">We will provide a full refund and conduct the removal and restoration at our cost, unless:</p>
                    <li className="text-lg mb-4">e.	we advised you of the need for written consent under paragraph 9.n and</li>
                    <li className="text-lg mb-4">f.	we have proceeded with the installation on your incorrect advice that yours is not a strata title property.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">50.	Under the Australian Consumer Law, if the sale to you was unsolicited and you are a Residential Customer, you will be given 10 business days after you sign a contract to cancel the contract without penalty (the “cooling-off period”). If you wish to withdraw from a valid contract after the expiry of any cooling-off period, we may apply our own policies regarding fees for cancellation, provided that we specified them in the initial contract. For all Customers protected by this Code, we may only impose cancellation or termination fees that are reasonable and related to the cost incurred by us.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Customer service</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">51.	We will provide fair terms, clear communication and maintain high standards of customer service at all times and respond courteously and promptly to any contact from you and queries you may have about New Energy Tech supplied by us to you.</li>
                <li className="text-lg mb-4">52.	If we have an ongoing service relationship with you and we are aware that you may be facing vulnerable circumstances (eg. illness,
                  impairment, a victim of abuse, financial stress or needing energy for medical or life-support equipment or services), we will take additional care to respond promptly to any related issues arising from the use of our New Energy Tech.</li>
              </ul>


              <h2 className="text-xl font-bold mb-4">Complaints</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">53.	If you are dissatisfied with a New Energy Tech we offered or supplied, you can submit a complaint directly to us. A complaint may include, for example, any expression of dissatisfaction with a New Energy Tech offered or provided, with the sales process or salesperson, or with the complaints handling procedure itself.</li>
                <li className="text-lg mb-4">54.	We will handle your complaint in a way that is fair, timely and transparent. This means that:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	we will have information readily available for you and our staff about how complaints may be made, how these are handled and available avenues to which you can escalate your complaint if you are not satisfied with our response</li>
                    <li className="text-lg mb-4">b.	we will acknowledge receipt of your complaint as soon as possible and tell you when we expect to be able to respond to your complaint</li>
                    <li className="text-lg mb-4">c.	we will log your complaint in a complaint’s register and promptly begin investigating the issues</li>
                    <li className="text-lg mb-4">d.	we will aim to provide you with a response to your complaint within 15 business days of receipt of your complaint. If we do not provide you with a final response by then, we will advise you before 15 business days have passed and provide an update of progress;</li>
                    <li className="text-lg mb-4" >e.	we will provide you with a final response to your complaint within 25 business days of receipt of your complaint, unless we have both agreed to a further extension</li>
                    <li className="text-lg mb-4">f.	if you are dissatisfied with our response to your complaint, we will provide you with contact details for escalation options including any external dispute resolution (Ombudsman) scheme of which we are a member, the State Consumer Affairs or Fair Trading body and the Administrator</li>
                    <li className="text-lg mb-4">g.	we will maintain appropriate record keeping of complaints and their outcomes and steps that we take to minimise similar complaints in the future.</li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Legal and privacy obligations</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">55.	We will comply with all local, state and federal legislation, relevant Accreditation Guidelines, and regulations including but not limited to:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	The Renewable Energy (Electricity) Act 2000 (Cth) which is supported by the Renewable Energy (Electricity) Regulations 2001 (Cth)</li>
                    <li className="text-lg mb-4">b.	The Do Not Call Register Act 2006 (Cth) and associated telemarketing standards including permitted hours for contacting consumers</li>
                    <li className="text-lg mb-4">c.	Australian Consumer Law</li>
                    <li className="text-lg mb-4">d.	Respecting “Do Not Knock” and “No Hawkers” stickers.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">56.	Even if we are not bound by the Privacy Act 1988 (Cth), we will take reasonable steps to ensure the safety of your personal information and we will only use your personal information:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	for the purpose of providing you with a requested quote or carrying out our obligations under your contract (as applicable)</li>
                    <li className="text-lg mb-4" >b.	for future marketing of other related New Energy Tech or providing you with information that you might reasonable expect to receive from us or</li>
                    <li className="text-lg mb-4" >c.	to provide your personal information to a third party if you have given express permission for this.</li>
                  </ul>
                </li>
                <li className="text-lg mb-4">57.	We will not provide you with marketing material unless we also provide a simple, easy way for you to ask not to receive future direct marketing communications and include a clear, prominent opt-out provision in each marketing communication.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Training</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">58.	We will train our sales agents, representatives, contractors and employees about our New Energy Tech and their responsibilities under this Code, so that they can provide you with accurate information and quality services.</li>
                <li className="text-lg mb-4">59.	We will ensure the safety of our installers, subcontractors and employees and demonstrate due diligence in ensuring the safety of persons under our direct or indirect responsibility.</li>
                <li className="text-lg mb-4">60.	Our people will be competent, appropriately qualified and have completed the relevant safety training modules (as specified by the relevant regulator or by the Administrator) appropriate to the work.</li>
              </ul>

              <h2 className="text-xl font-bold mb-4">Compliance with the Code</h2>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">61.	We agree to comply with this Code as amended from time to time. We will also ensure that our employees, contractors, agents, representatives and any other individuals or businesses acting on our behalf do likewise. This includes third parties we engage to undertake direct marketing and sales for us.</li>
                <li className="text-lg mb-4">62.	We will be responsible for all actions governed by this Code, whether taken by our employees, contractors, agents, representatives or any other individuals or businesses acting on our behalf. This includes third parties we engage to undertake direct marketing for us or who we engage to install products or systems we provide to you or to deliver services to you.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Definitions</h2>
              <p>The definitions for terms used in this Code are as follows.

                Administrator is the organisation with responsibility for administering the Code as set out in the Annexure – Code Administration.
                Australian Consumer Law – Schedule 2 to the Competition and Consumer Act 2010 (Commonwealth).
                Business day – A day that is not a Saturday, Sunday or public holiday in the relevant location in Australia.
                Customer – A potential or existing Residential Customer or Small Business Customer. The term also includes other customers if their contract expressly includes that this Code applies.
                Consumer Information Product – consumer information (hardcopy, web-based, electronic, etc) that is approved by the Administrator to provide independent information to assist a customer or potential customer to make informed choices about New Energy Tech.
                Energy Network – Any of Australia’s principal energy transmission and distribution networks (including South West Interconnected System, North West Interconnected System, Darwin- Katherine Electricity Network, National Electricity Market).
                Energy Supplier – Any of Australia’s public offer energy providers, including retailers and network businesses.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">New Energy Tech are:
                  <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">a.	small-scale (in-home or small business) products and systems that generate, store or trade energy away from Australia’s main transmission and distribution Energy Networks or as distributed energy resources connected to an Energy Network</li>
                    <li className="text-lg mb-4">b.	services that support or are closely related to those products and systems</li>
                    <li className="text-lg mb-4">c.	products, systems and services that monitor or manage a Customer’s usage of energy whether on or off an Energy Network</li>
                    <li className="text-lg mb-4">d.	any other product, system and service that the Administrator is satisfied is appropriately within this Code.</li>
                    <p>The term does not, however, include simple, low cost or off-the-shelf New Energy Tech that are within a class exemption made by the Administrator in accordance with paragraph A17 of the Annexure – Code Administration.</p>
                    <strong>Examples of New Energy Tech are:</strong>
                    <li className="text-lg mb-4">e.	distributed energy resources owned by or leased to the Customer that are connected to an Energy Network for supplementary supply such as solar photovoltaic systems, wind turbines, hydro and bioenergy generators</li>
                    <li className="text-lg mb-4">f.	a microgrid that may be connected or fully isolated from the Energy Network</li>
                    <li className="text-lg mb-4">g.	a power system for a single Customer, whether or not the Customer is also connected to an Energy Network</li>
                    <li className="text-lg mb-4">h.	energy management products, systems and services supplied to a Customer including home energy management systems and services, battery and other storage products, systems and services</li>
                    <li className="text-lg mb-4">i.	programs aimed at stabilising the supply of energy including by paying Customers an incentive to reduce their usage during critical peak periods or by shutting down or restricting the power consumption of Customer appliances during critical peak periods</li>
                    <li className="text-lg mb-4">j.	a Power Purchase Agreement</li>
                    <li className="text-lg mb-4">k.	person to person energy trading systems and services</li>
                    <li className="text-lg mb-4">l.	electric vehicle charging services</li>
                    <li className="text-lg mb-4">m.	suppliers of repair, maintenance and removal services for New Energy Tech products and systems.</li>
                  </ul>
                </li>
              </ul>
              <p>These examples are not intended to limit the scope of the definition. Rather the term has been defined to accommodate new products and services as they enter the Australian market where the nature, complexity and cost is such that the Code protections are appropriate.
                Owners Corporation – The body (however described) that has legal responsibility for the common property in a strata development.
                Panel – The independent Code Monitoring and Compliance Panel appointed to oversee the work of the Code Administrator.
                Power Purchase Agreement - An agreement for a Signatory to supply a customer with energy from New Energy Tech which may be from generation or storage equipment located on the customer’s premises or remotely. This is not intended to cover energy purchased through the wholesale electricity or gas markets.
                Residential Customer – A customer that is purchasing New Energy Tech for personal, domestic or household purposes. The term includes an Owners Corporation for a residential strata property and the operator of a retirement village.
                Small Business Customer – A customer that is a business or not for profit organisation that employs less than 20 people. Associated entities are taken to be one entity when calculating the number of employees.
              </p>
            </div>
          </div>
          <div className="annuxture" style={{ padding: "50px", textAlign: "justify" }}>
            <h1 className="text-2xl font-bold mb-4 mt-10 text-center">Annexure – Code Administration</h1>
            <h2 className="text-xl font-bold mb-4">Introduction</h2>
            <p>A1. The Code is administered in accordance with the Memorandum of Understanding agreed to on 24 January 2019 by Energy Consumers Australia, Energy Networks Australia, Public Interest Advocacy Centre, Clean Energy Council, Smart Energy Council, Australian Energy Council and Renew (MOU). The MOU provides that the governance, accountability and administration structure of the Code will be guided by the following principles:</p>
            <ol type="a">
              <li>a.	Customer focused</li>
              <li>b.	Fair and not anti-competitive</li>
              <li>c.	Relevant expertise</li>
              <li>d.	Independent and avoiding conflicts of interest</li>
              <li>e.	Inclusive</li>
              <li>f.	Adequately resourced.</li>
            </ol>
            <p>A2. The MOU specifies that the Code will be governed and administered by:</p>
            <ol type="a">
              <li>a.	The Council, which must comprise representatives of key stakeholders including industry associations and consumer bodies</li>
              <li>b.	The Council, which must comprise representatives of key stakeholders including industry associations and consumer bodies</li>
              <li>c.	The Administrator, appointed by the Council and responsible for day to day administration of the Code</li>
              <li>d.	The Code Monitoring and Compliance Panel (Panel) appointed by the Council and comprising industry and consumer representatives and independent persons with relevant expertise.</li>
            </ol>
            <p>This Annexure to the Code expands upon the role of the Administrator and the Panel and may be revised by the Council from time to time, following consultation with stakeholders.</p>

            <h2 className="text-xl font-bold mb-4">Applications and renewals</h2>
            <p>
              A3. The Administrator is responsible for developing application forms and renewal forms for use by industry participants wanting to become a signatory to the Code (Signatory) or renew their status as a Signatory.
            </p>
            <p>A4. Where an application is made by an industry participant and the application fee is paid, the Administrator must assess whether to admit the applicant as a Signatory. In making this assessment, the Administrator must take into account:</p>
            <ul>
              <li>a.	whether the applicant’s processes and documents are sufficient to support compliance by the applicant with the Code (other than a provision of the Code from which the Administrator has exempted the applicant)</li>
              <li>b.	whether the key personnel in the applicant’s business have had a significant involvement in another business that became insolvent.</li>
            </ul>
            <p>A5. Where a Signatory applies to renew their status as a Signatory, the Administrator may take into account any complaints that have been made about the Signatory, whether the Signatory has co-operated with the Administrator and Panel in carrying out their responsibilities and any other relevant factors.</p>
            <p>A6. Where an applicant is refused admittance or renewal as a Signatory, the Applicant has a right to appeal the Administrator’s decision to the Panel (a fee may be payable by the Applicant).</p>
            <h2 className="text-xl font-bold mb-4">Deferred payment arrangement providers</h2>
            <p>A7. Where a provider of a deferred payment arrangement requests the Administrator to approve its deferred payment contract and internal policies and procedures for the purposes of paragraph 25(a)(ii), the Administrator must do so if:</p>
            <ul>
              <li>a.	an appropriately qualified person engaged by the Administrator reviews the deferred payment    contract and    internal    policies    and     procedures and     certifies that they require the credit provider to:
                <ul>
                  <li>i.	resolve any complaints with the customer using an internal dispute resolution process and, if the complaint remains unresolved, an external dispute resolution process which must include the scheme operated by the Australian Financial Complaints Authority;</li>
                  <li>ii.	have processes to identify whether the customer is experiencing payment difficulties due to hardship; and</li>
                  <li>iii.	offer the customer alternative and flexible payment options if the customer is experiencing payment difficulties so that the customer can meet their repayments;</li>
                </ul>
              </li>
              <li>b.	the provider of the deferred payment arrangement pays the reasonable costs of the person engaged by the Administrator to undertake that work (costs to be paid to the Administrator in advance of the performance of the work).</li>
            </ul>
            <p>A8. Where the Administrator refuses to approve a provider’s deferred payment contract and internal policies and procedures under paragraph A7, the provider has a right to appeal the Administrator’s decision to the Panel (a fee may be payable by the provider).</p>
            <h2 className="text-xl font-bold mb-4">Fees</h2>
            <p>A9. The Council must, on an annual basis, agree to the fees and contributions required to cover the costs of operating the Council. These shared costs include the costs of the Independent Chair and the Consumer representatives. Industry members of the Council must cover the attendance costs of their own representatives. Council members may volunteer additional contribution but are not liable for any shortfall in funding to meet the costs of governing and administering the Code.</p>
            <p>A10.	The Administrator, on an annual basis, must review the fees payable by applicants and annual and other fees payable by Signatories, with a view to cost recovery including Code governance and administration costs. As part of its annual budgeting process, the Administrator must propose a schedule of fees and contributions to the Council for approval, at least 3 months prior to the intended date of effect.</p>
            <p>A11.If the Council is not willing to endorse the fees proposal, the Steward must engage an independent accountant to review the reasonableness of the fees proposal in light of the budget for the Code and, if relevant, the extent of revenue shortfall that the Steward has indicated it is willing to fund. The Steward must bear the accountant’s costs. Fees for the coming year will then be set by the Administrator taking into account any recommendations made by the independent accountant.</p>
            <p>A12.	The Administrator must publish details of fees on the Code website. A change in fees is not effective until at least 3 months after publication of the new fee on the Code website.</p>

            <h2 className="text-xl font-bold mb-4">Code promotion and branding</h2>
            <p>A13.	The Council and the Administrator must promote the benefits of the Code to customers, to industry participants and to other stakeholders.</p>
            <p>A14. The Council and the Administrator must develop Code brand mark guidelines for Signatories and publish these on the Code website. The Administrator must enforce compliance with these guidelines.</p>
            <p>A15.	The Administrator must maintain an easily accessible list of Signatories on the Code website.</p>


            <h2 className="text-xl font-bold mb-4">Supplementary materials</h2>
            <p>A16.	The Administrator may develop supplementary materials to assist Signatories to meet the expectations of the Code. These may include Consumer Information Products, checklists, templates or training.</p>

            <h2 className="text-xl font-bold mb-4">Exemptions</h2>
            <p>A17.	If an applicant or a Signatory applies to the Administrator for an exemption from a provision of the Code, the Administrator may agree to an exemption if satisfied that the exemption would not unduly diminish customer protection. For example, an exemption might be sensible if:</p>
            <ul>
              <li>a.	an existing Code requirement was not appropriate to a proposed New Energy Tech or a trial involving new technology or a new offering</li>
              <li>b.	A product or service is a free additional ‘value-added’ service that does not materially impact the benefit of the core offering.</li>
            </ul>
            <p>A18.	The Administrator, following consultation with stakeholders, may publish a class exemption. This does not require an individual application by a Signatory. A class exemption may set out conditions required for a Signatory to be able to rely on the exemption. (For example, it is intended that the Administrator will issue a class exemption to exempt simple, low-cost or off-the-shelf products or services (say priced below $199) for which the Code consumer protections are not appropriate. The Administrator may also publish a class exemption that permits temporary customer trials of new offerings.) The Administrator must publish class exemptions on the Code website.</p>
            <p>A19.	Any exemption (including a class exemption) must be for a fixed period and may only be extended following review by the Administrator.</p>

            <h2 className="text-xl font-bold mb-4">Monitoring and investigations</h2>
            <p>A20.	The Administrator must monitor compliance with the Code. This might include undertaking regular compliance audits and reviews of Signatories’ systems, policies and procedures, mystery shopping, assessing customer satisfaction, analysing customer complaints and investigating repeat instances. For example, the Administrator may conduct audits of sales conducted via direct marketing.</p>
            <p>A21. The Administrator must develop and publish a Complaints Procedure, consistent with Australian Standard AS ISO 10002, setting out the process where an allegation of breach of the Code is made. This must provide that:</p>
            <ul>
              <li>a.	a complaint may be self-reported by a Signatory or made by Customers, another Signatory, regulators or others</li>
              <li>b.	if a complaint is made by a Signatory’s Customer, the Administrator will investigate the complaint and, where appropriate, attempt to negotiate an outcome that is fair for both the Signatory and the Customer</li>
              <li>c.	where the Administrator is satisfied that a Signatory has breached the Code, the Administrator will determine what, if any, remedial action or sanction is appropriate</li>
              <li>d.	if the Signatory wishes to do so, the Signatory may ask the Panel to review a decision by the Administrator requiring the Signatory to take remedial action or imposing a sanction on the Signatory in response to a breach.</li>
            </ul>

            <p>A22.	The Administrator has the power to require a Signatory to:</p>
            <ul>
              <li>a.	rectify the issues that gave rise to the breach</li>
              <li>b.	train staff to minimise the likelihood of repeat breaches</li>
              <li>c.	require sales agents to undertake an assessment and accreditation process</li>
              <li>d.	appoint an external auditor, at the Signatory's cost, to audit areas of activity relevant to the breach (generally required if there are more than three major breaches in a 12- month period).</li>
            </ul>
            <strong>The Administrator also has the power to publicise the breach, including the name of the Signatory, on the Code website.</strong>
            <p>A23.	If the Administrator requires a Signatory to undertake remedial action in accordance with paragraph A22a. to d., the Administrator must monitor the Signatory’s compliance with that requirement.</p>
            <p>A24.	If the Administrator considers that a Signatory has breached the Code in a way that may warrant the suspension or expulsion of the Signatory, the Administrator may refer the matter to the Panel for its consideration. For example, the Administrator may do this if the Signatory fails without reasonable excuse to undertake remedial action as required by the Administrator in accordance with paragraph A22a. to d.</p>
            <p>A25.	If the Administrator identifies an issue that may constitute a serious or systemic breach of law, the Administrator may refer the matter to the Panel to decide whether the matter should be referred to the relevant regulator.</p>

            <h2 className="text-xl font-bold mb-4">Panel</h2>
            <p>
              A26.	The Panel is responsible for:
            </p>
            <ul>
              <li>a.	overseeing the monitoring of compliance and enforcement of this Code by the Administrator</li>
              <li>b.	reviewing a decision made by the Administrator requiring rectification of a breach (under paragraph A22), if the relevant Signatory requests a review</li>
              <li>c.	reviewing a decision made by the Administrator to refuse admittance or renewal as a Signatory if requested under paragraph A6</li>
              <li>d.		reviewing a decision made by the Administrator refusing to approve a provider’s deferred payment contract and internal policies and procedures if requested under paragraph A7</li>
              <li>e.	deciding matters of suspension or expulsion referred under paragraph A24 to it by the Administrator</li>
              <li>f.	referring serious or systemic breaches of law to relevant regulators under paragraph A25</li>
              <li>g.	publishing on-line an annual report about the Code's operation which must include the following information:</li>
              <ul>
                <li>i.	the number of applicants admitted as Signatories to the Consumer Code, the number of unsuccessful applications for admittance under the Consumer Code and the number of appeals against a decision regarding admittance, and the outcome of those appeals;</li>
                <li>ii.	reporting     on     Code     compliance     to     enable     assessment     of the Consumer Code's      effectiveness      and      extent       to       which the Consumer Code is promoting the confidence of the community in New Energy Tech including the number and type of alleged breaches of the Consumer Code by Signatories;</li>
                <li>iii.	reporting on each finding of breach of the Code by the Administrator or Panel and the remedial action or sanction imposed on the relevant Signatory (classified by reference to suspensions, expulsions and other remedial action
                  - this information must only identify the name of the relevant Signatory if the Signatory has been suspended or expelled);
                </li>
                <li>iv.	reporting on exemptions from Code requirements agreed to by the Administrator;</li>
                <li>v.	reporting on the Administrator’s approval of unregulated consumer credit contracts, policies and procedures including the number and identity of such credit providers approved.</li>
              </ul>
              <li>h.	every 3 years, engaging an independent body to undertake a review of the Code and its governance framework including by seeking the views of stakeholders (the review report must be published on the Code website) and revising the Code in light of that review.</li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Signatories’ obligations to Administrator and Panel</h2>
            <p>A Signatory must ensure that it takes all reasonable steps to promote the benefits of this Code to Customers including prominent links to or a display of the latest version of this Code on its online presence.
              A Signatory must promptly pay annual and any other Code-related fees applicable to it. A Signatory must comply with the Code.
              A Signatory must co-operate with the Administrator and Panel in their exercise of their powers and responsibilities under the Code.
            </p>
          </div>
          <div
            className="bg-blue-200"
            style={{ backgroundImage: "url(/3.png)" }}
          >
            <SimpleGrid
              columns={[null, null, 1, 2]}
              spacing={10}
              maxW="6xl"
              className="mx-auto pt-10"
            >
              <Box className="mt-10 flex justify-center lg:justify-end">
                <div className="m-4">
                  <p>Improving The Performance of Solar Energy</p>
                  <p className="font-extrabold text-3xl mt-2 ">
                    Residential <span>&#38;</span> Commercial <br /> Solar
                    Systems
                  </p>
                  <div className="my-[1vh] flex flex-row">
                    <div className="bg-white rounded-full w-[30px] h-[30px] mt-[1vh]">
                      <Image
                        src={tick}
                        className="w-[30px] h-[40px] mt-[-0.5vh]"
                        alt="Tick Mark Image"
                      ></Image>
                    </div>
                    <p className="w-56 py-2 pl-4">
                      {" "}
                      Receive an accurate quote within 3-5 days by filling out
                      this form or calling us at{" "}
                      <span className="text-3xl text-blue-900 font-bold">
                        1300377777
                      </span>
                    </p>
                  </div>
                </div>
              </Box>
              <Box>
                <div className="shadow-xl mt-4 mb-16 rounded-md border-2 border-white bg-transparent mx-1 sm:mx-10">
                  <form onSubmit={(e) => submitData(e)} className="px-[1.8vw] ">
                    <p className="text-blue-900 font-bold text-lg pt-5 py-[0.5vh] ">
                      Request A Quote
                    </p>
                    <VStack>
                      <Box className="ml-0  w-full mt-4">
                        <Text mb="8px" className="font-semibold">
                          Name
                        </Text>
                        <Input
                          placeholder="Name"
                          size="md"
                          background="white"
                          border="none"
                          type="text"
                          onChange={updateData}
                          name="name"
                          value={userData.name}
                        />
                      </Box>
                      <Box className="ml-0 w-full mt-4 ">
                        <HStack spacing={2} className="mt-2 ">
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Email
                            </Text>
                            <Input
                              placeholder="abcxyz@gmail.com"
                              size="md"
                              background="white"
                              border="none"
                              type="email"
                              onChange={updateData}
                              name="email"
                              value={userData.email}
                            />
                          </Box>
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Number
                            </Text>
                            <Input
                              placeholder="+60 3653653650"
                              size="md"
                              background="white"
                              border="none"
                              type="number"
                              onChange={updateData}
                              name="phone"
                              value={userData.phone}
                            />
                          </Box>
                        </HStack>
                      </Box>
                      <Box className="ml-0 w-full mt-4 ">
                        <HStack spacing={2} className="mt-2 ">
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              Pincode
                            </Text>
                            <Input
                              placeholder="Enter Your Pincode"
                              size="md"
                              background="white"
                              border="none"
                              type="text"
                              onChange={updateData}
                              name="pincode"
                              value={userData.pincode}
                            />
                          </Box>
                          <Box className="w-full">
                            <Text mb="8px" className="font-semibold">
                              State
                            </Text>
                            <Input
                              placeholder="Enter Your State"
                              size="md"
                              background="white"
                              border="none"
                              type="text"
                              onChange={updateData}
                              name="state"
                              value={userData.state}
                            />
                          </Box>
                        </HStack>
                      </Box>
                      <Box className="mt-8 w-full">
                        <Button
                          colorScheme="facebook"
                          type="submit"
                          className="w-full mt-4 mb-4"
                        >
                          Submit
                        </Button>
                      </Box>
                    </VStack>
                  </form>
                </div>
                <br />
                <br />
                <br />
                <br />
              </Box>
            </SimpleGrid>
          </div>
          {/* Additional Footer Starts Here  */}
          <TopFooter />
          {/* Additional Footer Ends Here  */}
        </div>
      </main>
      {/* Footer Starts */}
    </div>
  );
}
