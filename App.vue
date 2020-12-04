<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
/**
  
  mounted() {
    axios
      .get('https://datastudio.simnectzplatform.com/gateway/SIMNECTZ/currency_type_retrieval_presentation//sysadmin/currency/currencyTypeRetrieval', {
        headers:{
          accept: '',
          Authorization: '5e46871f34a6e5748c2c4171a08e856e996a41f08e5fa3d55812e6fe'
        }
      },
      {
        params: {
          token: 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo8y00OwiAQhuG7zNoFkBLUpbqwadI7ADNWEn4aWozGeHchNs7yme99A9KDfJop9xc4gkTaG6XtTQrRCWEPhMKojhnDLVdKwg5sKnHNr3NCqsF1aORJZxenzRhjvKrJOtr73xr5NLk46tBkdqGlZVlToDyWYCj_hmy7Viw64ik9e6wv-HwBAAD__w.alc0ibAbJotnPxSQL2wtt9Qo8h0YYzl4WkxOK65PnGy1fK4SDmNRRVEohqOya_K7qOXJOt5Cjdm10cejK3PViA',
          messageid: '006f7113e5fa48559549c4dfe74e2cd6',
          clientid: 'devin',
        }
      })
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
   
  mounted() {
    axios
      .post('https://datastudio.simnectzplatform.com/lbsgateway/sysadmin-experience/sysadmin/login', {
        data: {
          customernumber: '837000624904',
          loginname: 'Z358906(5)',
          loginpwd: '123456'
        },
        dataType: 'json',
        timeout: 60000,
        headers:{
          accept: '',
          'Content-Type': 'application/json',
          Authorization: '5e46871f34a6e5748c2c4171a08e856e996a41f08e5fa3d55812e6fe',
          token: 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNoszEEKwjAQheG7ZKXgYtIkTeJSXViEHsDdNDPVQptItKKIdzcFt9_Pex9B_OQx3Tg3B7EVynqpNPvgndYGgydlkKQDLwGxsmIjQprjI7_3ibgMjqeFRsY8xMvfAEAW7TLGcP2btHWhMV2G2OK0yFkZ56FemfXyMN8faeLczlPHuVSnbLmpK-1Bl37HSLv0aqgksqQh2B6JO80QkEH2jqrQe-jAafH9AQAA__8.uTAvA3hcnKHmczi0kH0T5RaI03ZU5OBZJoMxNzJbZbgekb5PNrjW5yg3gQ54UUxY9zBcT4rQzG2BmrwEp8jVWA'
        }
      })
      .then(response => (this.info = response.data))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
  */
</script>
