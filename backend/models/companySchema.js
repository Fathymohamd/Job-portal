import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  logo: {
    type: String,
    required: true,
  },

  jobsCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Company", companySchema);

[
  {
    "_id": "1",
    "name": "Google",
    "logo": "google.png",
    "jobsCount": 25
  },
  {
    "_id": "2",
    "name": "Microsoft",
    "logo": "microsoft.png",
    "jobsCount": 18
  },
  {
    "_id": "3",
    "name": "Amazon",
    "logo": "amazon.png",
    "jobsCount": 32
  },
  {
    "_id": "4",
    "name": "Apple",
    "logo": "apple.png",
    "jobsCount": 21
  },
  {
    "_id": "5",
    "name": "Meta",
    "logo": "meta.png",
    "jobsCount": 27
  },
  {
    "_id": "6",
    "name": "Netflix",
    "logo": "netflix.png",
    "jobsCount": 14
  },
  {
    "_id": "7",
    "name": "Adobe",
    "logo": "adobe.png",
    "jobsCount": 16
  },
  {
    "_id": "8",
    "name": "IBM",
    "logo": "ibm.png",
    "jobsCount": 22
  },
  {
    "_id": "9",
    "name": "Oracle",
    "logo": "oracle.png",
    "jobsCount": 19
  },
  {
    "_id": "10",
    "name": "Intel",
    "logo": "intel.png",
    "jobsCount": 13
  },
  {
    "_id": "11",
    "name": "NVIDIA",
    "logo": "nvidia.png",
    "jobsCount": 24
  },
  {
    "_id": "12",
    "name": "Cisco",
    "logo": "cisco.png",
    "jobsCount": 17
  },
  {
    "_id": "13",
    "name": "Salesforce",
    "logo": "salesforce.png",
    "jobsCount": 20
  },
  {
    "_id": "14",
    "name": "SAP",
    "logo": "sap.png",
    "jobsCount": 15
  },
  {
    "_id": "15",
    "name": "Dell Technologies",
    "logo": "dell.png",
    "jobsCount": 18
  },
  {
    "_id": "16",
    "name": "HP",
    "logo": "hp.png",
    "jobsCount": 12
  },
  {
    "_id": "17",
    "name": "Lenovo",
    "logo": "lenovo.png",
    "jobsCount": 11
  },
  {
    "_id": "18",
    "name": "Accenture",
    "logo": "accenture.png",
    "jobsCount": 29
  },
  {
    "_id": "19",
    "name": "Deloitte",
    "logo": "deloitte.png",
    "jobsCount": 23
  },
  {
    "_id": "20",
    "name": "PwC",
    "logo": "pwc.png",
    "jobsCount": 20
  },
  {
    "_id": "21",
    "name": "KPMG",
    "logo": "kpmg.png",
    "jobsCount": 17
  },
  {
    "_id": "22",
    "name": "EY",
    "logo": "ey.png",
    "jobsCount": 21
  },
  {
    "_id": "23",
    "name": "Uber",
    "logo": "uber.png",
    "jobsCount": 16
  },
  {
    "_id": "24",
    "name": "Airbnb",
    "logo": "airbnb.png",
    "jobsCount": 12
  },
  {
    "_id": "25",
    "name": "Spotify",
    "logo": "spotify.png",
    "jobsCount": 15
  },
  {
    "_id": "26",
    "name": "Twitter",
    "logo": "twitter.png",
    "jobsCount": 9
  },
  {
    "_id": "27",
    "name": "LinkedIn",
    "logo": "linkedin.png",
    "jobsCount": 18
  },
  {
    "_id": "28",
    "name": "GitHub",
    "logo": "github.png",
    "jobsCount": 14
  },
  {
    "_id": "29",
    "name": "GitLab",
    "logo": "gitlab.png",
    "jobsCount": 13
  },
  {
    "_id": "30",
    "name": "Shopify",
    "logo": "shopify.png",
    "jobsCount": 17
  },
  {
    "_id": "31",
    "name": "Stripe",
    "logo": "stripe.png",
    "jobsCount": 19
  },
  {
    "_id": "32",
    "name": "PayPal",
    "logo": "paypal.png",
    "jobsCount": 16
  },
  {
    "_id": "33",
    "name": "Block",
    "logo": "block.png",
    "jobsCount": 11
  },
  {
    "_id": "34",
    "name": "Coinbase",
    "logo": "coinbase.png",
    "jobsCount": 13
  },
  {
    "_id": "35",
    "name": "Twilio",
    "logo": "twilio.png",
    "jobsCount": 10
  },
  {
    "_id": "36",
    "name": "Cloudflare",
    "logo": "cloudflare.png",
    "jobsCount": 18
  },
  {
    "_id": "37",
    "name": "Datadog",
    "logo": "datadog.png",
    "jobsCount": 12
  },
  {
    "_id": "38",
    "name": "Atlassian",
    "logo": "atlassian.png",
    "jobsCount": 15
  },
  {
    "_id": "39",
    "name": "Slack",
    "logo": "slack.png",
    "jobsCount": 9
  },
  {
    "_id": "40",
    "name": "Zoom",
    "logo": "zoom.png",
    "jobsCount": 11
  },
  {
    "_id": "41",
    "name": "Dropbox",
    "logo": "dropbox.png",
    "jobsCount": 10
  },
  {
    "_id": "42",
    "name": "Red Hat",
    "logo": "redhat.png",
    "jobsCount": 14
  },
  {
    "_id": "43",
    "name": "VMware",
    "logo": "vmware.png",
    "jobsCount": 13
  },
  {
    "_id": "44",
    "name": "Qualcomm",
    "logo": "qualcomm.png",
    "jobsCount": 16
  },
  {
    "_id": "45",
    "name": "AMD",
    "logo": "amd.png",
    "jobsCount": 15
  },
  {
    "_id": "46",
    "name": "Tesla",
    "logo": "tesla.png",
    "jobsCount": 20
  },
  {
    "_id": "47",
    "name": "SpaceX",
    "logo": "spacex.png",
    "jobsCount": 12
  },
  {
    "_id": "48",
    "name": "Samsung",
    "logo": "samsung.png",
    "jobsCount": 26
  },
  {
    "_id": "49",
    "name": "Sony",
    "logo": "sony.png",
    "jobsCount": 14
  },
  {
    "_id": "50",
    "name": "LG Electronics",
    "logo": "lg.png",
    "jobsCount": 13
  },
  {
    "_id": "51",
    "name": "Huawei",
    "logo": "huawei.png",
    "jobsCount": 18
  },
  {
    "_id": "52",
    "name": "Alibaba",
    "logo": "alibaba.png",
    "jobsCount": 24
  },
  {
    "_id": "53",
    "name": "Tencent",
    "logo": "tencent.png",
    "jobsCount": 21
  },
  {
    "_id": "54",
    "name": "ByteDance",
    "logo": "bytedance.png",
    "jobsCount": 17
  },
  {
    "_id": "55",
    "name": "TikTok",
    "logo": "tiktok.png",
    "jobsCount": 19
  },
  {
    "_id": "56",
    "name": "Oracle Cloud",
    "logo": "oracle-cloud.png",
    "jobsCount": 11
  },
  {
    "_id": "57",
    "name": "Cisco Systems",
    "logo": "cisco-systems.png",
    "jobsCount": 15
  },
  {
    "_id": "58",
    "name": "Johnson & Johnson",
    "logo": "johnson-johnson.png",
    "jobsCount": 12
  },
  {
    "_id": "59",
    "name": "Pfizer",
    "logo": "pfizer.png",
    "jobsCount": 14
  },
  {
    "_id": "60",
    "name": "Siemens",
    "logo": "siemens.png",
    "jobsCount": 18
  },
  {
    "_id": "61",
    "name": "Bosch",
    "logo": "bosch.png",
    "jobsCount": 13
  },
  {
    "_id": "62",
    "name": "BMW",
    "logo": "bmw.png",
    "jobsCount": 16
  },
  {
    "_id": "63",
    "name": "Mercedes-Benz",
    "logo": "mercedes-benz.png",
    "jobsCount": 15
  },
  {
    "_id": "64",
    "name": "Toyota",
    "logo": "toyota.png",
    "jobsCount": 19
  },
  {
    "_id": "65",
    "name": "Volkswagen",
    "logo": "volkswagen.png",
    "jobsCount": 14
  },
  {
    "_id": "66",
    "name": "Ford",
    "logo": "ford.png",
    "jobsCount": 17
  },
  {
    "_id": "67",
    "name": "General Motors",
    "logo": "general-motors.png",
    "jobsCount": 16
  },
  {
    "_id": "68",
    "name": "Coca-Cola",
    "logo": "coca-cola.png",
    "jobsCount": 12
  },
  {
    "_id": "69",
    "name": "PepsiCo",
    "logo": "pepsico.png",
    "jobsCount": 14
  },
  {
    "_id": "70",
    "name": "Unilever",
    "logo": "unilever.png",
    "jobsCount": 11
  },
  {
    "_id": "71",
    "name": "Nestlé",
    "logo": "nestle.png",
    "jobsCount": 15
  },
  {
    "_id": "72",
    "name": "McDonald's",
    "logo": "mcdonalds.png",
    "jobsCount": 22
  },
  {
    "_id": "73",
    "name": "Starbucks",
    "logo": "starbucks.png",
    "jobsCount": 18
  },
  {
    "_id": "74",
    "name": "Nike",
    "logo": "nike.png",
    "jobsCount": 13
  },
  {
    "_id": "75",
    "name": "Adidas",
    "logo": "adidas.png",
    "jobsCount": 12
  },
  {
    "_id": "76",
    "name": "Walmart",
    "logo": "walmart.png",
    "jobsCount": 25
  },
  {
    "_id": "77",
    "name": "Target",
    "logo": "target.png",
    "jobsCount": 14
  },
  {
    "_id": "78",
    "name": "eBay",
    "logo": "ebay.png",
    "jobsCount": 15
  },
  {
    "_id": "79",
    "name": "Etsy",
    "logo": "etsy.png",
    "jobsCount": 10
  },
  {
    "_id": "80",
    "name": "Booking.com",
    "logo": "booking.png",
    "jobsCount": 13
  },
  {
    "_id": "81",
    "name": "Expedia",
    "logo": "expedia.png",
    "jobsCount": 11
  },
  {
    "_id": "82",
    "name": "Uber Eats",
    "logo": "uber-eats.png",
    "jobsCount": 9
  },
  {
    "_id": "83",
    "name": "Careem",
    "logo": "careem.png",
    "jobsCount": 16
  },
  {
    "_id": "84",
    "name": "Vodafone",
    "logo": "vodafone.png",
    "jobsCount": 20
  },
  {
    "_id": "85",
    "name": "Orange",
    "logo": "orange.png",
    "jobsCount": 18
  },
  {
    "_id": "86",
    "name": "Etisalat",
    "logo": "etisalat.png",
    "jobsCount": 17
  },
  {
    "_id": "87",
    "name": "WE",
    "logo": "we.png",
    "jobsCount": 14
  },
  {
    "_id": "88",
    "name": "IBM Egypt",
    "logo": "ibm-egypt.png",
    "jobsCount": 12
  },
  {
    "_id": "89",
    "name": "Valeo",
    "logo": "valeo.png",
    "jobsCount": 15
  },
  {
    "_id": "90",
    "name": "Fawry",
    "logo": "fawry.png",
    "jobsCount": 13
  },
  {
    "_id": "91",
    "name": "Swvl",
    "logo": "swvl.png",
    "jobsCount": 11
  },
  {
    "_id": "92",
    "name": "Vezeeta",
    "logo": "vezeeta.png",
    "jobsCount": 10
  },
  {
    "_id": "93",
    "name": "Mashreq",
    "logo": "mashreq.png",
    "jobsCount": 14
  },
  {
    "_id": "94",
    "name": "CIB",
    "logo": "cib.png",
    "jobsCount": 19
  },
  {
    "_id": "95",
    "name": "Banque Misr",
    "logo": "banque-misr.png",
    "jobsCount": 21
  },
  {
    "_id": "96",
    "name": "EFG Holding",
    "logo": "efg-holding.png",
    "jobsCount": 12
  },
  {
    "_id": "97",
    "name": "Mashreq Bank",
    "logo": "mashreq-bank.png",
    "jobsCount": 13
  },
  {
    "_id": "98",
    "name": "Raya Holding",
    "logo": "raya-holding.png",
    "jobsCount": 10
  },
  {
    "_id": "99",
    "name": "ITWorx",
    "logo": "itworx.png",
    "jobsCount": 16
  },
  {
    "_id": "100",
    "name": "Valeo Egypt",
    "logo": "valeo-egypt.png",
    "jobsCount": 14
  }
]