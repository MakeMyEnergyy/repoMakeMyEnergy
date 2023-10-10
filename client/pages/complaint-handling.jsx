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

export default function ComplainHandle() {
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
        window.location.href="/thanks";
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
              <p className="text-4xl font-extrabold ">Complaints Handling Procedure</p>
              <p className="py-[1vh]">
                Resources /{" "}
                <span className="text-orange-500">Complaints</span>{" "}
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
            <div >
                <h2 className="text-xl font-bold mb-4">Making  a complaint</h2>
              <p className="text-lg mb-6">
              Make my Energy seeks to maintain and enhance its reputation of providing you with high quality products and services. We value complaints as they assist us to improve our products, services, and customer service. We are committed to being responsive to the needs and concerns of our customers or potential customers and to resolving your complaint as quickly as possible. However, there are times that the nature of complaint is complex and needs to be investigated considering all the intricacies. Yet we assure to provide a suitable outcome within 21 business days of when the complaint was raised. In case the support team requires additional time, we will keep you informed of the need of more time and assure the investigation will be completed within 45 days of the receipt of the complaint.
              </p>
              <h2 className="text-xl font-bold mb-4">
              Contact the Sales Representative
              </h2>
              <p className="text-lg mb-6">
              The irst thing you can do is let us know what has occurred by calling the sales representative of Make my Energy who assisted you with your purchase. Our sales team is well trained in customer service and will try to resolve your problem with utmost sincerity. After discussion with the concerned parties, the sales representative will propose an appropriate solution for your consideration. If you are not happy with the solution from the sales representative, you can escalate the matter following Step 2.
              </p>
              <h2 className="text-2xl font-bold mb-4 mt-10">
              Escalating your complaint
              </h2>
              <p className="text-lg mb-6">If the Sales Representative is not able to provide a satisfactory solution, you can escalate your complaint by contacting Customer Service Manager (CSM) at support@makemyenergy.com.au. You can also call 1300 377 777 to request escalation of your complaint. You will receive initial feedback on complaints within 48 hours of receipt. You may request information on the status of your complaint at any time by emailing support@makemyenergy.com.au.</p>
              <h2 className="text-2xl font-bold mb-4">
              Seeking External Advice
              </h2>
              <p className="text-lg mb-6">
              In the case you would like to escalate the complaint outside of Make my Energy, you are entitled to seek an external review of the decision from the appropriate body depending on the nature of your complaint and relating to a system under warranty. We have listed important contact details of concerned authorities below:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-lg mb-4">
                a.	Consumer Affairs Victoria - 1300 55 81 81,
                </li>
                <li className="text-lg mb-4">
                b.	Ofice of Regulatory Services (ACT) – (02) 62073000,
                </li>
                <li className="text-lg mb-4">
                c.	NSW Fair Trading – 13 32 20,
                </li>
                <li className="text-lg">
                d.	Consumer Affairs Northern Territory – 1800 019 319,
                </li>
                <li className="text-lg">
                e.	Consumer and Business Services (South Australia) – 13 18 82,
                </li>
                <li className="text-lg">
                f.  Consumer Affairs and Fair Trading (Tasmania) – 1300 654 499 and
                </li>
                <li className="text-lg">
                g.	Consumer Protection (Western Australia) – 1300 304 054.
                </li>


              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-10 text-center">
             
Related to faulty workmanship of an accredited installer: Clean Energy Council - solaraccreditation.com.au If you are concerned about electrical safety: Energy Safe Victoria - (03) 9203 9700

              </h2>
               <p className="text-lg mb-6">Relating to the Clean Energy Council Code of Conduct for Approved Solar Retailers - Notify the Clean Energy Council using the online Code of Conduct complaints form available at - https://cleanenergycouncil.secure.force.com/ComplaintForm

</p>
            </div>
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
