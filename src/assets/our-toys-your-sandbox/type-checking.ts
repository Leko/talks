modelChangedDebounce(sandbox, model) {
  sandbox.getWorkerProcess().then((worker) =>
    Promise.all([
      worker.getSemanticDiagnostics(model.uri.toString()),
      worker.getSyntacticDiagnostics(model.uri.toString()),
    ])
  )
    .then(([semanticDiagnostics, syntacticDiagnostics]) =>
      semanticDiagnostics.concat(syntacticDiagnostics)
    )
    .then(diagnostics => {
      // ハンドリングする
    })
  // ...
}
