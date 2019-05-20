<template>
  <v-container
    fluid
    grid-list-xl
    fill-height>
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card
          color="#333333">
          <div
            slot="header"
          >
            <div class="title font-weight-light mb-2">Notifications</div>
            <div class="category">
              These could alert the user of issues with data aquisition in progress, or maybe advise them of an update needed to support the current device.  It can also use location data to alert them of oportunities for additional data acquisition, etc...
            </div>
          </div>

          <v-card-text>
            <v-layout
              row
              wrap>
              <v-flex
                md6
                sm12>
                <h2 class="title font-weight-light mb-3">Urgent</h2>

                <material-notification
                  class="mb-3"
                  color="error"
                  dismissible
                >
                  <strong>DANGER</strong> - The device you're attempting to acquire data from
                </material-notification>

                <material-notification
                  class="mb-3"
                  color="warning"
                  dismissible
                >
                  <strong>WARNING</strong> - Your Data Acquisition Job has completed but may be invalid due to device incompatability, be sure to check the "Recommendation" area for suggestions to any issues.
                </material-notification>
                              </v-flex>
              <v-flex
                md6
                sm12>
                <h2 class="title font-weight-light">General</h2>
                <material-notification
                  class="mb-3"
                  color="success"
                  dismissible
                >
                  <strong>SUCCESS</strong> - Your Data Acquisition Job has completed successfully.
                </material-notification>

             
              </v-flex>
            </v-layout>
            <div class="text-xs-center">
              <h2 class="title font-weight-light mb-2">Recommendations</h2>
              <span class=" subheading font-weight-light grey--text">Click to view notifications</span>
            </div>

            <v-container grid-list-lg>
              <v-layout
                justify-center
                row
                wrap>
                <v-flex
                  xs12
                  sm4>
                  <v-btn
                    block
                    color="rgba(70,70,70,.5)"
                    @click="snack('bottom')"
                  >
                   Device Compatability Info...
                  </v-btn>
                </v-flex>

              </v-layout>
            </v-container>

            <v-snackbar
              :color="color"
              :bottom="bottom"
              :top="top"
              :left="left"
              :right="right"
              v-model="snackbar"
              dark
            >
              <v-icon
                color="white"
                class="mr-3"
              >
                mdi-bell-plus
              </v-icon>
              <div>Note - <b>Device Compatability</b> -  Use the DataPilot Upgrade link to check for Device Compatability updates.</div>
              <v-icon
                size="16"
                @click="snackbar = false"
              >
                mdi-close-circle
              </v-icon>
            </v-snackbar>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    color: null,
    colors: [
      'purple',
      'info',
      'success',
      'warning',
      'error'
    ],
    top: true,
    bottom: false,
    left: false,
    right: false,
    snackbar: false
  }),

  methods: {
    snack (...args) {
      this.top = false
      this.bottom = false
      this.left = false
      this.right = false

      for (const loc of args) {
        this[loc] = true
      }

      this.color = this.colors[2];

      this.snackbar = true
    }
  }
}
</script>
