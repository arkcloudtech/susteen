<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Location Log"
          text="Location grouped by general area boundary within a configured time interrval"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Calls',
        value: 'name'
      },
      {
        sortable: false,
        text: 'State',
        value: 'state'
      },
      {
        sortable: false,
        text: 'City',
        value: 'city'
      },
      {
        sortable: false,
        text: 'Charges',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: '14',
        state: 'California',
        city: 'Orange',
        salary: '$35.10'
      },
      {
        name: '1',
        state: 'California',
        city: 'Santa Ana',
        salary: '$2.32'
      }, {
        name: '2',
        state: 'California',
        city: 'Corona',
        salary: '$56,142'
      }, {
        name: '53',
        state: 'California',
        city: 'Upland',
        salary: '$38.35'
      }, {
        name: '23',
        state: 'California',
        city: 'Irvine',
        salary: '$6.42'
      }, {
        name: '38',
        state: 'Chile',
        city: 'Gloucester',
        salary: '$78.15'
      }
    ]
  })
}
</script>
