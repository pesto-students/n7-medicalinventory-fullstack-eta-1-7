import easyinvoice from "easyinvoice";

export const PDFInvoice = async (
  logo,
  senderDetails,
  clientDetails,
  invoiceNumber,
  invoiceDate,
  products,
  bottomNotice
) => {
  const data = {
    currency: "INR",
    locale: "en-IN",
    taxNotation: "GST",
    marginTop: 25,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    logo: logo,
    sender: senderDetails,
    // sender: {
    //   company: "Sample Corp",
    //   address: "Sample Street 123",
    //   zip: "1234 AB",
    //   city: "Sampletown",
    //   country: "Samplecountry",
    // },
    client: clientDetails,
    // client: {
    //   company: "Client Corp",
    //   address: "Clientstreet 456",
    //   zip: "4567 CD",
    //   city: "Clientcity",
    //   country: "Clientcountry",
    // },
    invoiceNumber: invoiceNumber,
    invoiceDate: invoiceDate,
    products: products,
    // products: [
    //   {
    //     quantity: "2",
    //     description: "Test1",
    //     tax: 6,
    //     price: 33.87,
    //   },
    //   {
    //     quantity: "4",
    //     description: "Test2",
    //     tax: 21,
    //     price: 10.45,
    //   },
    //   {
    //     quantity: "4",
    //     description: "Test2",
    //     tax: 21,
    //     price: 10.45,
    //   },
    // ],
    bottomNotice: bottomNotice,
  };

  await easyinvoice.createInvoice(data, function (result) {
    return easyinvoice.download("myInvoice.pdf", result.pdf);
  });
};
