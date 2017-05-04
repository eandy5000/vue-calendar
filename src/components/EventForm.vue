<template>
    <div id="event-form" :class="{ active: active }" :style="{ top: top, left: left }">
        <h4>Add an event</h4>
        <p>{{date.format('dddd, MMM Do')}}</p>
        <div class="text">
            <input 
                type="text" 
                v-model="description" 
                v-focus 
                v-on:keyup.enter="createEvent"
            />
        </div>
        <div class="buttons">
            <button @click="createEvent">Create Event</button>
        </div>
        <button id="close-button" @click="close">&#10005</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                description: ''
            };
        },
        methods: {
           close() {
               this.$store.commit('eventFormActive', false);
           },
           createEvent() {
               if(this.description.length > 0) {
                    this.$store.dispatch('addEvent', this.description);
                    this.$store.commit('eventFormActive', false);
                    this.description = '';
               }
           }
        },
        computed: {
            date() {
                return this.$store.state.eventFormDate;
            },
            active() {
                return this.$store.state.eventFormActive;
            },
            top() {
                return `${this.$store.state.eventFormPosY}px`;
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`;
            },
            events() {
                return this.$store.state.events;
            }
        },
        directives: {
            focus: {
                update(element) {
                    element.focus();
                }
            }
        }
    }
</script>

