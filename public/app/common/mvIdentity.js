function mvIdentity() {
  return {
    currentUser: undefined,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  }
}

