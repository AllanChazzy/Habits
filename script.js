const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03"],
  water: ["01-01", "01-03", "01-06"],
  read: ["01-03"],
}

nlwSetup.setData(data)
nlwSetup.load()
