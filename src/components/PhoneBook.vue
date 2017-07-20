<template>
  <div>
    <h1>Phone Book</h1>
    <el-row>
      <phone-book-form
        :contact="contact"
        :onSubmit="onSubmit"
      />
      <phone-book-filter
        :onSearch="onSearch"
      />
    </el-row>
    <el-row>
      <phone-book-table
        :contacts="phonebook"
        :onDelete="onDelete"
        :onSort="onSort"
      />
    </el-row>
    <el-pagination
      layout="prev, pager, next"
      :total="contacts.length"
      :page-count="itemsPerPage"
      :current-page="page"
      @current-change="onChangePage"
      >
    </el-pagination>
  </div>
</template>

<script>
  import PhoneBookForm from './PhoneBookForm';
  import PhoneBookFilter from './PhoneBookFilter.vue';
  import PhoneBookTable from './PhoneBookTable.vue';

  const filterContacts = (contacts, query) => {
    return contacts.filter(contact => {
      if (query) {
        return contact.name.indexOf(query) !== -1
          || contact.phone.indexOf(query) !== -1;
      }

      return true;
    });
  };

  const sortContacts = (contacts, sort) => {
    if (!sort.order || !sort.prop) {
      return contacts;
    }

    return contacts.slice().sort((a, b) => {
      if (sort.order === 'ascending') {
        return a[sort.prop] > b[sort.prop];
      } else {
        return a[sort.prop] < b[sort.prop];
      }
    });
  };

  export default {
    data() {
      return {
        contacts: [],
        contact: {
          name: '',
          phone: ''
        },
        query: '',
        page: 1,
        itemsPerPage: 10,
        sort: {
          prop: '',
          order: ''
        }
      }
    },
    created() {
        const contacts = localStorage.getItem('contacts');

        if (contacts) {
            try {
              this.contacts = JSON.parse(contacts);
            } catch (e) {
              console.error(e);
            }
        }
    },
    methods: {
      onSubmit(contact) {
        this.contacts.push(contact);
        this.contact = {
          name: '',
          phone: ''
        };

        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
      onSearch(query) {
        this.query = query;
      },
      onDelete(index) {
        const start = (this.page - 1) * this.itemsPerPage;
        this.contacts.splice(start + index, 1);

        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
      onChangePage(page) {
        this.page = page;
      },
      onSort(config) {
        this.sort.prop = config.prop;
        this.sort.order = config.order;
      }
    },
    computed: {
      phonebook() {
        const start = (this.page - 1) * this.itemsPerPage;
        const filteredContacts = filterContacts(this.contacts, this.query);
        const sortedContacts = sortContacts(filteredContacts, this.sort);

        return sortedContacts.slice(start, start + this.itemsPerPage);
      },
      pages() {
        return Math.ceil(this.contacts.length / this.itemsPerPage);
      }
    },
    components: {
      PhoneBookForm,
      PhoneBookFilter,
      PhoneBookTable
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 10px;
  }
</style>
