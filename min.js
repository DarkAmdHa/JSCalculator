function calcVals(l) {
  const e = jQuery(".input"),
    o = document.getElementById("type"),
    a = jQuery(".unit");
  let u = (e[0].value / 2) * 1.30088,
    t = (e[1].value / 2) * 1.30088,
    v = (e[2].value / 2) * 1.30088,
    _ = (e[3].value / 2) * 1.0465,
    i = (e[4].value / 2) * 1.0465,
    f = (e[5].value / 2) * 1.0465,
    r = (e[6].value / 2) * (1.0465 * 0.95),
    d = (e[7].value / 2) * (1.0465 * 0.95),
    m = (e[8].value / 2) * 0.94185,
    b = (e[9].value / 2) * 0.94185,
    w = (e[0].value / 2) * (0.255 * 2.7),
    s = (e[1].value / 2) * (0.255 * 2.7),
    p = (e[2].value / 2) * (0.255 * 2.7),
    n = (e[3].value / 2) * (0.255 * 2.18),
    x = (e[4].value / 2) * (0.255 * 2.18),
    c = (e[5].value / 2) * (0.255 * 2.18),
    N = (e[6].value / 2) * 0.528105,
    F = (e[7].value / 2) * 0.528105,
    g = (e[8].value / 2) * 0.50031,
    h = (e[9].value / 2) * 0.50031,
    A = (e[3].value / 2) * 0.43776,
    B = (e[4].value / 2) * 0.43776,
    M = (e[5].value / 2) * 0.43776,
    y = (e[6].value / 2) * 0.50688,
    q = (e[7].value / 2) * 0.50688,
    S = (e[8].value / 2) * 0.52992,
    T = (e[9].value / 2) * 0.52992;
  $(".veg1_pA_out2").val(u.toFixed(2)),
    $(".veg2_pA_out2").val(t.toFixed(2)),
    $(".veg3_pA_out2").val(v.toFixed(2)),
    $(".flow1_pA_out2").val(_.toFixed(2)),
    $(".flow2_pA_out2").val(i.toFixed(2)),
    $(".flow3_pA_out2").val(f.toFixed(2)),
    $(".flow4_pA_out2").val(r.toFixed(2)),
    $(".flow5_pA_out2").val(d.toFixed(2)),
    $(".flow6_pA_out2").val(m.toFixed(2)),
    $(".flow7_pA_out2").val(b.toFixed(2)),
    $(".veg1_pB_out2").val(w.toFixed(2)),
    $(".veg2_pB_out2").val(s.toFixed(2)),
    $(".veg3_pB_out2").val(p.toFixed(2)),
    $(".flow1_pB_out2").val(n.toFixed(2)),
    $(".flow2_pB_out2").val(x.toFixed(2)),
    $(".flow3_pB_out2").val(c.toFixed(2)),
    $(".flow4_pB_out2").val(N.toFixed(2)),
    $(".flow5_pB_out2").val(F.toFixed(2)),
    $(".flow6_pB_out2").val(g.toFixed(2)),
    $(".flow7_pB_out2").val(h.toFixed(2)),
    $(".veg1_blm_out2").val((0).toFixed(2)),
    $(".veg2_blm_out2").val((0).toFixed(2)),
    $(".veg3_blm_out2").val((0).toFixed(2)),
    $(".flow1_blm_out2").val(A.toFixed(2)),
    $(".flow2_blm_out2").val(B.toFixed(2)),
    $(".flow3_blm_out2").val(M.toFixed(2)),
    $(".flow4_blm_out2").val(y.toFixed(2)),
    $(".flow5_blm_out2").val(q.toFixed(2)),
    $(".flow6_blm_out2").val(S.toFixed(2)),
    $(".flow7_blm_out2").val(T.toFixed(2)),
    $(".veg1_total").text(`${(Number(u) + Number(w)).toFixed(2)}`),
    $(".veg2_total").text(`${(Number(t) + Number(s)).toFixed(2)}`),
    $(".veg3_total").text(`${(Number(v) + Number(p)).toFixed(2)}`),
    $(".flow1_total").text(`${(Number(_) + Number(n) + Number(A)).toFixed(2)}`),
    $(".flow2_total").text(`${(Number(i) + Number(x) + Number(B)).toFixed(2)}`),
    $(".flow3_total").text(`${(Number(f) + Number(c) + Number(M)).toFixed(2)}`),
    $(".flow4_total").text(`${(Number(r) + Number(N) + Number(y)).toFixed(2)}`),
    $(".flow5_total").text(`${(Number(d) + Number(F) + Number(q)).toFixed(2)}`),
    $(".flow6_total").text(`${(Number(m) + Number(g) + Number(S)).toFixed(2)}`),
    $(".flow7_total").text(`${(Number(b) + Number(h) + Number(T)).toFixed(2)}`);
  let k = u / 0.322,
    D = t / 0.322,
    V = v / 0.322,
    W = _ / 0.322,
    E = i / 0.322,
    I = f / 0.322,
    j = r / 0.322,
    L = d / 0.322,
    P = m / 0.322,
    Q = b / 0.322,
    z = w / 0.255,
    C = s / 0.255,
    G = p / 0.255,
    H = n / 0.255,
    J = x / 0.255,
    K = c / 0.255,
    O = N / 0.255,
    R = F / 0.255,
    U = g / 0.255,
    X = h / 0.255,
    Y = A / 0.18,
    Z = B / 0.18,
    ll = M / 0.18,
    el = y / 0.18,
    ol = q / 0.18,
    al = S / 0.18,
    ul = T / 0.18;
  "DtL" == o.value
    ? ($(".veg1_pA_out1").val(k.toFixed(1)),
      $(".veg2_pA_out1").val(D.toFixed(1)),
      $(".veg3_pA_out1").val(V.toFixed(1)),
      $(".flow1_pA_out1").val(W.toFixed(1)),
      $(".flow2_pA_out1").val(E.toFixed(1)),
      $(".flow3_pA_out1").val(I.toFixed(1)),
      $(".flow4_pA_out1").val(j.toFixed(1)),
      $(".flow5_pA_out1").val(L.toFixed(1)),
      $(".flow6_pA_out1").val(P.toFixed(1)),
      $(".flow7_pA_out1").val(Q.toFixed(1)),
      $(".veg1_pB_out1").val(z.toFixed(1)),
      $(".veg2_pB_out1").val(C.toFixed(1)),
      $(".veg3_pB_out1").val(G.toFixed(1)),
      $(".flow1_pB_out1").val(H.toFixed(1)),
      $(".flow2_pB_out1").val(J.toFixed(1)),
      $(".flow3_pB_out1").val(K.toFixed(1)),
      $(".flow4_pB_out1").val(O.toFixed(1)),
      $(".flow5_pB_out1").val(R.toFixed(1)),
      $(".flow6_pB_out1").val(U.toFixed(1)),
      $(".flow7_pB_out1").val(X.toFixed(1)),
      $(".veg1_blm_out1").val((0).toFixed(1)),
      $(".veg2_blm_out1").val((0).toFixed(1)),
      $(".veg3_blm_out1").val((0).toFixed(1)),
      $(".flow1_blm_out1").val(Y.toFixed(1)),
      $(".flow2_blm_out1").val(Z.toFixed(1)),
      $(".flow3_blm_out1").val(ll.toFixed(1)),
      $(".flow4_blm_out1").val(el.toFixed(1)),
      $(".flow5_blm_out1").val(ol.toFixed(1)),
      $(".flow6_blm_out1").val(al.toFixed(1)),
      $(".flow7_blm_out1").val(ul.toFixed(1)),
      a.each((l, e) => (e.innerText = "grams")))
    : "conc" == o.value &&
      (2.4 == e[0].value
        ? $(".veg1_pA_out1").val(22)
        : $(".veg1_pA_out1").val(Math.floor(k / (849 / 3785))),
      2.4 == e[1].value
        ? $(".veg2_pA_out1").val(22)
        : $(".veg2_pA_out1").val(Math.floor(D / (849 / 3785))),
      2.4 == e[2].value
        ? $(".veg3_pA_out1").val(22)
        : $(".veg3_pA_out1").val(Math.floor(V / (849 / 3785))),
      $(".flow1_pA_out1").val(Math.round(W / (849 / 3785))),
      $(".flow2_pA_out1").val(Math.round(E / (849 / 3785))),
      $(".flow3_pA_out1").val(Math.round(I / (849 / 3785))),
      $(".flow4_pA_out1").val(Math.round(j / (849 / 3785))),
      $(".flow5_pA_out1").val(Math.round(L / (849 / 3785))),
      $(".flow6_pA_out1").val(Math.round(P / (849 / 3785))),
      $(".flow7_pA_out1").val(Math.round(Q / (849 / 3785))),
      $(".veg1_pB_out1").val(Math.round(z / (570 / 3785))),
      $(".veg2_pB_out1").val(Math.round(C / (570 / 3785))),
      $(".veg3_pB_out1").val(Math.round(G / (570 / 3785))),
      $(".flow1_pB_out1").val(Math.round(H / (570 / 3785))),
      $(".flow2_pB_out1").val(Math.round(J / (570 / 3785))),
      $(".flow3_pB_out1").val(Math.round(K / (570 / 3785))),
      $(".flow4_pB_out1").val(Math.round(O / (570 / 3785))),
      $(".flow5_pB_out1").val(Math.round(R / (570 / 3785))),
      $(".flow6_pB_out1").val(Math.round(U / (570 / 3785))),
      $(".flow7_pB_out1").val(Math.round(X / (570 / 3785))),
      ($(".veg1_blm_out1").value = 0),
      ($(".veg2_blm_out1").value = 0),
      ($(".veg3_blm_out1").value = 0),
      e[3].value >= 3
        ? ($(".flow1_blm_out1").value = Math.ceil(Y / (667 / 3785)) + 1)
        : ($(".flow1_blm_out1").value = Math.ceil(Y / (667 / 3785))),
      e[4].value >= 3
        ? ($(".flow2_blm_out1").value = Math.ceil(Z / (667 / 3785)) + 1)
        : ($(".flow2_blm_out1").value = Math.ceil(Z / (667 / 3785))),
      e[5].value >= 3
        ? ($(".flow3_blm_out1").value = Math.ceil(ll / (667 / 3785)) + 1)
        : ($(".flow3_blm_out1").value = Math.round(ll / (667 / 3785))),
      ($(".flow4_blm_out1").value = Math.round(el / (667 / 3785))),
      ($(".flow5_blm_out1").value = Math.round(ol / (667 / 3785))),
      ($(".flow6_blm_out1").value = Math.round(al / (667 / 3785))),
      ($(".flow7_blm_out1").value = Math.round(ul / (667 / 3785))),
      a.each((l, e) => (e.innerText = "ML"))),
    e[0].value >= 3.5
      ? $(".si_veg1").val(0.125)
      : e[0].value >= 2.7
      ? $(".si_veg1").val(0.25)
      : e[0].value >= 2.3
      ? $(".si_veg1").val(0.33)
      : $(".si_veg1").val(0.5),
    e[1].value >= 3.5
      ? $(".si_veg2").val(Number(0.125))
      : e[1].value >= 2.7
      ? $(".si_veg2").val(Number(0.25))
      : e[1].value >= 2.3
      ? $(".si_veg2").val(0.33)
      : $(".si_veg2").val(0.5),
    e[2].value >= 3.5
      ? $(".si_veg3").val(Number(0.125))
      : e[2].value >= 2.7
      ? $(".si_veg3").val(Number(0.25))
      : e[2].value >= 2.3
      ? $(".si_veg3").val(Number(0.33))
      : $(".si_veg3").val(Number(0.5)),
    e[3].value <= 1.6
      ? $(".si_flow1").val(Number(0.5))
      : e[3].value <= 2.1
      ? $(".si_flow1").val(Number(0.375))
      : e[3].value <= 2.6
      ? $(".si_flow1").val(Number(0.25))
      : e[3].value <= 3.1
      ? $(".si_flow1").val(Number(0.1875))
      : e[3].value <= 3.51
      ? $(".si_flow1").val(Number(0.125))
      : $(".si_flow1").val(Number(0)),
    e[4].value <= 1.6
      ? $(".si_flow2").val(Number(0.5))
      : e[4].value <= 2.1
      ? $(".si_flow2").val(Number(0.375))
      : e[4].value <= 2.6
      ? $(".si_flow2").val(Number(0.25))
      : e[4].value <= 3.1
      ? $(".si_flow2").val(Number(0.1875))
      : e[4].value <= 3.51
      ? $(".si_flow2").val(Number(0.125))
      : $(".si_flow2").val(Number(0)),
    e[5].value <= 1.6
      ? $(".si_flow3").val(Number(0.5))
      : e[5].value <= 2.1
      ? $(".si_flow3").val(Number(0.375))
      : e[5].value <= 2.6
      ? $(".si_flow3").val(Number(0.25))
      : e[5].value <= 3.1
      ? $(".si_flow3").val(Number(0.1875))
      : e[5].value <= 3.51
      ? $(".si_flow3").val(Number(0.125))
      : $(".si_flow3").val(Number(0)),
    e[6].value <= 1.6
      ? $(".si_flow4").val(Number(0.5))
      : e[6].value <= 2.1
      ? $(".si_flow4").val(Number(0.375))
      : e[6].value <= 2.6
      ? $(".si_flow4").val(Number(0.25))
      : e[6].value <= 3.1
      ? $(".si_flow4").val(Number(0.1875))
      : e[6].value <= 3.51
      ? $(".si_flow4").val(Number(0.125))
      : $(".si_flow4").val(Number(0)),
    e[7].value <= 1.6
      ? $(".si_flow5").val(Number(0.5))
      : e[7].value <= 2.1
      ? $(".si_flow5").val(Number(0.375))
      : e[7].value <= 2.6
      ? $(".si_flow5").val(Number(0.25))
      : e[7].value <= 3.1
      ? $(".si_flow5").val(Number(0.1875))
      : e[7].value <= 3.51
      ? $(".si_flow5").val(Number(0.125))
      : $(".si_flow5").val(Number(0)),
    e[8].value <= 1.6
      ? $(".si_flow6").val(Number(0.5))
      : e[8].value <= 2.1
      ? $(".si_flow6").val(Number(0.375))
      : e[8].value <= 2.6
      ? $(".si_flow6").val(Number(0.25))
      : e[8].value <= 3.1
      ? $(".si_flow6").val(Number(0.1875))
      : e[8].value <= 3.51
      ? $(".si_flow6").val(Number(0.125))
      : $(".si_flow6").val(Number(0)),
    e[9].value <= 1.6
      ? $(".si_flow7").val(Number(0.5))
      : e[9].value <= 2.1
      ? $(".si_flow7").val(Number(0.375))
      : e[9].value <= 2.6
      ? $(".si_flow7").val(Number(0.25))
      : e[9].value <= 3.1
      ? $(".si_flow7").val(Number(0.1875))
      : e[9].value <= 3.51
      ? $(".si_flow7").val(Number(0.125))
      : $(".si_flow7").val(Number(0));
}
function AsPDF(l) {
  window.print(), l.preventDefault();
}
function showTab(l) {
  "none" === $(".table-container").css("display")
    ? ($(".table-container").css("display", "block"),
      $(".save-pdf").css("display", "block"),
      setTimeout(() => {
        $(".table-container").css("opacity", "1"),
          $(".table-container").css("transform", "none"),
          $(".save-pdf").css("opacity", "1"),
          $(".save-pdf").css("transform", "none");
      }, 100))
    : console.log($(".table-container").css("display"));
}
$(".calculate_button").click(calcVals),
  $(".calculate_button").click(showTab),
  $(".save-pdf").click(AsPDF),
  $(document).ready(calcVals()),
  $(document).ready(() => {
    $(".table-container").css("display", "none"),
      $(".save-pdf").css("display", "none");
  }),
  $("#type").on("change", calcVals);
const setInputTabDim = () => {
  const l = document.querySelectorAll(".inputs"),
    e = document.querySelectorAll(".weeks");
  l.forEach((l, o) => {
    l.style.width = `${e[o].offsetWidth + 3}px`;
  }),
    document.querySelectorAll(".grayed-out").forEach((l) => {
      l.style.width = `${document.querySelector(".flush").offsetWidth}px`;
    }),
    (document.querySelector(".ec_target").style.width = `${
      document.querySelector(".product").offsetWidth +
      document.querySelector(".units-column").offsetWidth +
      7
    }px`);
};
setInputTabDim();
