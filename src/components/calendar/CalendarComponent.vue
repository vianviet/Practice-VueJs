<template>
  <v-row class="fill-height calendar">
    <v-col>
      <v-sheet height="64" class="d-flex justify-space-between">
        <v-toolbar flat>
          <div class="calendar__toolbar__left">
            {{
              $refs.calendar
                ? $refs.calendar.title
                : `${
                    monthNames[new Date().getMonth()]
                  } ${new Date().getFullYear()}`
            }}
          </div>
          <div class="calendar__toolbar__right">
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
          </div>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="300">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="selectedMore = true"
          @click:date="viewDay"
          @click:day="viewDay"
          @change="handleChange"
        ></v-calendar>
        <v-dialog v-model="selectedOpen" persistent max-width="600px">
          <v-card>
            <form>
              <v-card-title>
                <span class="text-h5">Edit Event</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="9">
                      <v-text-field
                        v-model="selectedEvent.name"
                        label="Event Name"
                        required
                        autofocus
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="editEvent(selectedEvent.id)"
                      >
                        Edit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="selectedOpen = false">
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="deleteEvent(selectedEvent.id)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </form>
          </v-card>
        </v-dialog>
        <v-menu
          key="2"
          v-model="selectedMore"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <form>
          <v-card-title>
            <span class="text-h5">Add New Event</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="nameInput"
                    label="Event Name"
                    required
                    autofocus
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="colorSelected"
                    :items="colors"
                    label="Category"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="addEvent">
              Create event
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default {
  name: "calendar-component",
  data: () => ({
    dialog: false,
    monthNames,
    nameInput: "",
    colorSelected: "",
    focus: "",
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    selectedMore: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  methods: {
    handleChange(e) {
      console.log(e);
    },
    viewDay({ date }) {
      this.focus = date;
      this.dialog = true;
    },
    addEvent() {
      this.dialog = false;
      const newEvent = {
        id: 1,
        name: this.nameInput,
        start: this.focus,
        end: this.focus,
        color: this.colorSelected === "" ? "blue" : this.colorSelected,
        timed: false,
      };
      this.checkId(newEvent);
      this.events.push(newEvent);
      this.nameInput = "";
      this.colorSelected === "blue";
    },
    editEvent(data) {
      this.selectedOpen = false;
    },
    deleteEvent(id) {
      const deleteElement = this.events.findIndex((each) => each.id === id);
      this.events.splice(deleteElement, 1);
      this.selectedOpen = false;
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },

    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    checkId(object) {
      const isExistId = this.events.some((each) => {
        if (each.id === object.id) {
          return true;
        }
      });
      if (isExistId) {
        object.id = object.id + 1;
        this.checkId(object);
      }
    },
  },
  mounted() {
    // this.$store.dispatch("logout");
  },
};
</script>

<style lang="scss">
.calendar {
  .v-toolbar__content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .v-btn--fab.v-size--small {
    height: auto;
    width: auto;
  }
  .v-calendar-weekly__day-label {
    margin: 0;
  }
  .v-calendar-weekly__day-label {
    text-align: right !important;
  }
}
</style>
